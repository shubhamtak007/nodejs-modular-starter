import { Router } from "express";
import { userDetails } from "./users.controller.js";
import { authenticate } from '../auth/auth.middleware.js';

const userRoutes = Router();

userRoutes.get("/me", authenticate, userDetails);

export default userRoutes;