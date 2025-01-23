import { Router } from "express";
import { uploadArtwork } from "./artwork.controller.js";

const artworkRouter = new Router();

artworkRouter.post("/upload", uploadArtwork);

export default artworkRouter;