import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import { init, registerRoutes} from './config/init.js';
import connectToDatabase from './db/connection.js';
import authRouter from './modules/auth/auth.routes.js';
import galleryRouter from './modules/gallery/gallery.routes.js';
import artworkRouter from './modules/artwork/artwork.routes.js';

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

init(app);
registerRoutes(app, authRouter);

app.use("/auth", authRouter);
app.use("/gallery", galleryRouter);
app.use('/uploads', express.static('src/modules/artwork/uploads'));
app.use("/artwork", artworkRouter);

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server running on port ${process.env.SERVER_PORT}`);
    connectToDatabase();
});