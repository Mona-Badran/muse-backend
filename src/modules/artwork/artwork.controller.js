import db from "../../db/models/index.js";

export const uploadImage = async (req, res) => {
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
