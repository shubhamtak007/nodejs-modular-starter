import jwt from 'jsonwebtoken';
import type { StringValue } from "ms";

function generateAccessToken(payload: object) {
    return jwt.sign({ payload }, process.env.JWT_ACCESS_TOKEN_SECRET as string, {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN as StringValue
    });
};

function generateRefreshToken(payload: object) {
    return jwt.sign({ payload }, process.env.JWT_REFRESH_TOKEN_SECRET as string, {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN as StringValue
    });
};

function verifyRefreshToken(token: string) {
    return jwt.verify(token, process.env.JWT_REFRESH_TOKEN_SECRET as string);
};

function verifyAccessToken(token: string) {
    return jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET as string);
}

const TokenService = { generateAccessToken, generateRefreshToken, verifyRefreshToken, verifyAccessToken };

export default TokenService;