import { User } from "../../models/user.js";
import jwt from "jsonwebtoken";
import { handlePassword } from "./service.js";

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
        res.status(500).send({ message: "Something went wrong" });
    }
};

export const register = async (req, res) => {
    try {
        const { username, password } = req.body;

        const hashedPassword = await handlePassword(password);

        const user = await User.create({
            username,
            password: hashedPassword,
        });

        return res.status(201).send(user);

    } catch (error) {
        
    }
};
export const logout = async (req, res) => {};
export const forgotPassword = async (req, res) => {};