import { Router } from "express";
import {getImage} from "./artwork.controller";

const artworkRouter = new Router();

artworkRouter.post("/upload", getImage);

export default artworkRouter;