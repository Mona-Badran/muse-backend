import { Router } from "express";
import { forgotPassword, logout, login, register } from "./controller.js";

const authRouter = new Router();