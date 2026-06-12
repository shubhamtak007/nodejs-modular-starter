import { Request, Response } from "express";
import UserService from "./user.service.js";
import { AuthRequest } from "../auth/auth.middleware.js";

const profile = async (request: AuthRequest, response: Response) => {
    try {
        const userId = request.user?.userId;

        if (!userId) {
            return response.status(401).json({
                success: false,
                message: "Unauthorized",
            });
        }

        const user = await UserService.retrieveUserProfile(userId);

        return response.status(200).json({
            success: true,
            data: user,
        });

    } catch (error) {
        return response.status(500).json({
            success: false,
            message: "Failed to fetch profile",
        });
    }
}

export { profile };