import db from "../../db/models/index.js";
import { uploadImage } from "./artwork.service.js";

export const getImage = async (req, res) => {
    try {
        const imageUrl = await uploadImage(req, res);
        return res.status(201).send({
            message: "Image uploaded successfully",
            imageUrl: imageUrl,
        });
    } catch (error) {
        return res.status(400).send({ message: error });
    }
};
