import db from "../../db/models/index.js";

export const getImage = async (req, res) => {
    try {
        const imageUrl = await getImage(req, res);
        return res.status(201).send({
            message: "Image uploaded successfully",
            imageUrl: imageUrl,
        });
    } catch (error) {
        return res.status(400).send({ message: error });
    }
};
