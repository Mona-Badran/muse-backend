import db from "../../db/models/index.js";
import { uploadImage } from "./artwork.service.js";

const { Image } = db;

export const getImage = async (req, res) => {
    try {
        const { user_id, ML_result_id } = req.body;

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
            imageUrl: imageUrl,
        });
    } catch (error) {
        return res.status(400).send({ message: error });
    }
};
