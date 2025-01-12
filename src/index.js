import express from "express";
import dotenv from 'dotenv';
import { init } from './config/init.js';
import connectToDatabase from './db/connection.js';

const app = express();
dotenv.config();

init(app);

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server running on port ${process.env.SERVER_PORT}`);
    connectToDatabase();
});