import db from "../../db/models/index.js";
import jwt from "jsonwebtoken";
import { handlePassword } from "./service.js";

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
        const { username, password, user_type_id } = req.body;

        const hashedPassword = await handlePassword(password);

        const user = await User.create({
            username,
            password: hashedPassword,
            user_type_id,
        });

        return res.status(201).send(user);

    } catch (error) {
        console.error(error.message);
        console.log(error);
        res.status(500).send({ message: error.message });
    }
};

export const registerArtGallery = async (req, res) => {
    try {
        const { name, description, images, owner_id } = req.body;

        const artGallery = await ArtGallery.create({
            name,
            description,
            images,
            owner_id,
        });

        return res.status(201).send(user);

    } catch (error) {
        console.error(error.message);
        console.log(error);
        res.status(500).send({ message: error.message });
    }
};

export const logout = async (req, res) => { };

export const forgotPassword = async (req, res) => { };