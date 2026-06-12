import { Router } from "express";
import { profile } from "./user.controller.js";
import { authenticate } from './../auth/auth.middleware.js';

const userRoutes = Router();

userRoutes.get("/profile", authenticate, profile);

export default userRoutes;