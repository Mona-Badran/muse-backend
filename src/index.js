import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import connectToDatabase from './db/connection.js';

const app = express();
dotenv.config();

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server running on port ${process.env.SERVER_PORT}`);
    connectToDatabase();
});