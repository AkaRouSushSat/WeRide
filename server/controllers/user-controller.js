import User from '../models/user-schema.js'

export const userSignup = async (request, response) => {

    try {
        const exist = await UserActivation.findOne({username:request.body.username});
        if(exist){
            return response.status(401).json({message:'Username alredy taken'});
        }

        const user = request.body;
        const newUser = new User(user);
        
        await newUser.save();
        response.status(200).json({message: user});
    } catch (error) {
        response.status(500).json({message: error.message});
    }
}

export const userLogin = async (request, response) => {
    try {
        const username = await request.body.username;
        const password = await request.body.password;

        let user = await userLogin.findOne({ username: username, password: password});
        if(user){
            return response.status(200).json({data:user});
        }
        else{
            return response.status(401).json({message: 'Invalid username or password'});
        }
    } catch (error) {
        response.status(500).json({message:error.message});
    }
}