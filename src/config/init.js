import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';

export const init = (app) => {
    dotenv.config();

    app.use(express.json());
    app.use(
        cors({
            origin: "*",
        })
    );
};