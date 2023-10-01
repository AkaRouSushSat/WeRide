import express from 'express';
import Connection from './config/db.js';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import Router from './routes/route.js';
import cors from 'cors';

const app = express();


dotenv.config();
app.use(cors());
app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended : true}));

app.use('/', Router);

const PORT = 8000;

const USERNAME = process.env.DATABASE_USERNAME;
const PASSWORD = process.env.DATABASE_PASSWORD ;

Connection(USERNAME, PASSWORD);

app.listen(PORT , () => console.log(`Server is running on PORT ${PORT}`));

