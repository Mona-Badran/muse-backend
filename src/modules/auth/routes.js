import { Router } from "express";
import { forgotPassword, logout, login, register } from "./controller.js";

const authRouter = new Router();

authRouter.post("/login", login);
authRouter.post("/logout", logout);
