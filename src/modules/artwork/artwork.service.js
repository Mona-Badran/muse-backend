import multer from "multer";
import path from "path";
import fs from "fs";

const uploads = path.join(process.cwd(), "src", "modules", "artwork", "uploads");

if (!fs.existsSync(uploads)) {
    fs.mkdirSync(uploads, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage: storage }).single("image");

export const saveImage  = (req, res) => {};

export const uploadImage = (req, res) => {
    return new Promise((resolve, reject) => {
        upload(req, res, (err) => {
            if (err) {
                reject("Error uploading image");
            } else if (!req.file) {
                reject("No image provided");
            } else {
                const imageUrl = `/artwork/uploads/${req.file.filename}`;
                resolve(imageUrl);
            }
        });
    });
};