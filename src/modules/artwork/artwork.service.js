import multer from "multer";
import path from "path";
import fs from "fs";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage: storage }).single("image");

export const uploadImage = (req, res) => {
    return new Promise((resolve, reject) => {
        upload(req, res, (err) => {
            if (err) {
                reject("Error uploading image");
            } else if (!req.file) {
                reject("No image provided");
            } else {
                const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
                resolve(imageUrl);
            }
        });
    });
};