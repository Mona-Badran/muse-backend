import db from "../../db/models/index.js";
const { ArtGallery } = db;
const { Event } = db;

export const gallerySearch = async (req, res) => { 
    try {
        const { search } = req.query;
        const galleries = await ArtGallery.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${search}%`,
                },
            },
        });

        return res.send(galleries);
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: error.message });
    }
};
export const getGalleries = async (req, res) => { 
    try {  } catch (error) {
        return res.status(500).send({
            message: "Somthing went wrong",
        });
    };
};
export const getGallery = async (req, res) => { };
export const getEvent = async (req, res) => { };
export const createEvent = async (req, res) => { };
export const updateimages = async (req, res) => { };