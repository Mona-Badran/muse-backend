import db from "../../db/models/index.js";
import { saveImage } from "./artwork.service.js";

const { Image } = db;

export const uploadArtwork = async (req, res) => {};

export const getImage = async (req, res) => {
    try {
        const { user_id, ML_result_id } = req.body;

        user_id = parseInt(req.body.user_id, 10);

        if (!user_id) {
            return res.status(400).send({ message: "User ID is required" });
        }
        const imageUrl = await uploadImage(req, res);
        
        const imageEntry = await Image.create({
            image_url: imageUrl,
            user_id: user_id,
            ML_result_id: ML_result_id || null,
        });

        return res.status(201).send({
            message: "Image uploaded and saved to database successfully",
            imageUrl: imageEntry,
        });
    } catch (error) {
        return res.status(400).send({ message: error });
    }
};
