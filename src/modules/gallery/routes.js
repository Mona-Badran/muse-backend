import { Router } from "express";
import { gallerySearch, getEvent, getGalleries, getGallery } from "./controller.js";

const galleryRouter = new Router();

galleryRouter.get("/", getGalleries);
galleryRouter.get("/search", gallerySearch);
galleryRouter.get("/:id", getGallery);
galleryRouter.get("/event/:id", getEvent);