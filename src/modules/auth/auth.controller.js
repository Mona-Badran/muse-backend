import db from "../../db/models/index.js";
import jwt from "jsonwebtoken";
import { handlePassword } from "./auth.service.js";

const { User } = db;
const { ArtGallery } = db;

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({
            where: { username },
        });

        if (!user) {
            return res.status(400).send({ message: "Invalid credentials" });
        }

        await handlePassword(password, user.password);

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1d" });

        return res.send({ user, token });

    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: error.message });
    }
};

export const register = async (req, res) => {
    try {
        const { username, password, user_type_id, name, description, images } = req.body;

        const hashedPassword = await handlePassword(password);

        const user = await User.create({
            username,
            password: hashedPassword,
            user_type_id,
        });

        if (user_type_id === 2) {
            try {
                const artGallery = await ArtGallery.create({
                    name,
                    description,
                    images,
                    owner_id: user.id,
                });
                console.log(artGallery);
                
                return res.status(201).send({ user, artGallery });
            } catch (error) {
                console.error(error.message);
                throw new Error('Error creating art gallery');
            }
        } else {
            return res.status(201).send({ user });
        }
    } catch (error) {
        console.error(error.message);
        console.error("error", error);
        res.status(500).send({ message: error.message });
    }
};

export const logout = async (req, res) => { 
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(400).send({ message: 'No token provided.' });
        }
        res.clearCookie('authToken', { httpOnly: true });

        return res.status(200).send({ message: 'Logged out successfully.' });

    } catch (error) {
        console.error('Error during logout:', error.message);
        return res.status(500).send({ message: 'Logout failed. Please try again.' });
    }
};

export const forgotPassword = async (req, res) => { };