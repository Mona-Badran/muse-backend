import multer from "multer";
import path from "path";
import db from "../../db/models/index.js";

const { Image } = db;

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(process.cwd(), 'src/modules/artwork/uploads'));
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage }).single('image');

export const saveImage  = (req, res) => {
    return new Promise((resolve, reject) => {
        upload(req, res, (err) => {
            if (err) {
                reject(new Error('Image upload failed'));
            } else if (!req.file) {
                reject(new Error('No image provided'));
            } else {
                resolve(`/uploads/${req.file.filename}`);
            }
        });
    });
};
