import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(process.cwd(), 'src/modules/artwork/uploads'));
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