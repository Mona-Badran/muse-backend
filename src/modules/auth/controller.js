import { User } from "../../models/user.js";
import jwt from "jsonwebtoken";
import { handlePassword } from "./service.js";

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({
            where: { username },
        });
    } catch (error) {
        
    }
};

export const register = async (req, res) => {};
export const logout = async (req, res) => {};
export const forgotPassword = async (req, res) => {};