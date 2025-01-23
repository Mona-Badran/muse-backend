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
                try {
                    // Mock user_id = 1
                    const userId = 1;
                    const imageUrl = `/uploads/${req.file.filename}`;

                    // Save image URL in database
                    const newImage = Image.create({
                        image_url: imageUrl,
                        user_id: userId,
                        ML_result_id: null, // Default value, update later if needed
                    });
                    console.log("lololo"+newImage);
                    

                    resolve(imageUrl);
                } catch (dbError) {
                    reject(new Error('Database insertion failed'));
                }
            }
        });
    });
};
