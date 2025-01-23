import { Router } from "express";
import { gallerySearch, getEvent, getGalleries, getGallery, updateimages, createEvent } from "./gallery.controller.js";

const galleryRouter = new Router();

galleryRouter.get("/", getGalleries);
galleryRouter.get("/search", gallerySearch);
galleryRouter.get("/:id", getGallery);
galleryRouter.get("/event/:id", getEvent);
galleryRouter.post("/event", createEvent);
galleryRouter.put("/:id", updateimages);

export default galleryRouter;