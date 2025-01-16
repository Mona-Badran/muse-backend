import express from "express";
import dotenv from 'dotenv';
import { init, registerRoutes} from './config/init.js';
import connectToDatabase from './db/connection.js';
import uathRouter from './modules/auth/routes.js';

const app = express();
dotenv.config();

init(app);
registerRoutes(app, uathRouter);

app.use("/auth", authRouter);

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server running on port ${process.env.SERVER_PORT}`);
    connectToDatabase();
});