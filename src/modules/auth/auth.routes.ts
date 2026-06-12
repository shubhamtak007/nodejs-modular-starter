import { Router } from "express";
import { signUp, signIn, signOut, refreshToken } from "./auth.controller.js";
import { signInSchema, signUpSchema } from "./auth.validation.js";
import validate from "../../middleware/validate.middleware.js";

const authRoutes = Router();

authRoutes.post("/sign-up", validate(signUpSchema), signUp);
authRoutes.post("/sign-in", validate(signInSchema), signIn);
authRoutes.post("/refresh-token", refreshToken);
authRoutes.post("/sign-out", signOut);

export default authRoutes;