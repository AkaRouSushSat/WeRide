import mongoose from "mongoose";

export const Connection = async (username,password) =>{

    const URL = `mongodb+srv://${username}:${password}@coride.i6xxdf7.mongodb.net/?retryWrites=true&w=majority`;
    
    try {

        await mongoose.connect(URL,
        {
            useUnifiedTopology:true, 
            useNewUrlParser:true
        });

        console.log('Databse connected Sucessfully');
 
     } catch (error) {
         console.log('Error while connectng databases ',error.message);
     }
   

}

export default Connection;