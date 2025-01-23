import { Router } from "express";
import { forgotPassword, logout, login, register } from "./auth.controller.js";

const authRouter = new Router();

authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.post("/register", register);
authRouter.post("/password", forgotPassword);

export default authRouter;