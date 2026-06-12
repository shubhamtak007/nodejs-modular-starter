import { Request, Response, NextFunction } from "express";
import WebToken from '../../utils/jwt.js';
import { Jwt, JwtPayload } from '../../types/jwt.types.js';


export interface AuthRequest extends Request {
    user?: JwtPayload;
}

export const authenticate = (request: AuthRequest, response: Response, next: NextFunction) => {
    try {
        if (!request.cookies.accessToken) {
            return response.status(401).json({
                success: false,
                message: "Access token missing",
            });
        }

        const accessToken = request.cookies.accessToken;

        const decoded = (WebToken.verifyAccessToken(accessToken) as Jwt);
        request.user = decoded.payload;

        setNoCacheHeaders(response);

        next();

    } catch (error) {
        return response.status(401).json({
            success: false,
            message: "Invalid or expired token",
        });
    }
};

function setNoCacheHeaders(response: Response) {
    response.set({
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
    });
}