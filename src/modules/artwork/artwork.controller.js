import db from "../../db/models/index.js";
import { saveImage } from "./artwork.service.js";

const { Image } = db;

export const uploadArtwork = async (req, res) => {
    try {
        const imageUrl = await saveImage(req, res);
        res.status(200).json({
            message: 'Image uploaded successfully',
            imageUrl: imageUrl,
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
