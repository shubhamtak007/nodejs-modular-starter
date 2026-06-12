import { Request, Response } from "express";
import AuthenticationService from "./auth.service.js";

const signUp = async (request: Request, response: Response) => {
    try {
        const { name, email, password } = request.body;
        const cookies = request.cookies;
        const result = await AuthenticationService.signUp({ name, email, password, cookies });

        clearTokensFromCookies(response);
        setResponseHeaders(response, result);

        response.status(200).json({ message: 'Done!!' });

    } catch (error: unknown) {
        response.status(400).json({
            message: error instanceof Error ? error.message : String(error),
        });
    }
};

const signIn = async (request: Request, response: Response) => {
    try {
        const { email, password } = request.body;
        const cookies = request.cookies;
        const result = await AuthenticationService.signIn({ email, password, cookies });

        clearTokensFromCookies(response);
        setResponseHeaders(response, result);

        response.status(200).json({ message: 'Done!!' });

    } catch (error: unknown) {
        response.status(400).json({
            message: error instanceof Error ? error.message : String(error),
        });
    }
};

const refreshToken = async (request: Request, response: Response) => {
    try {
        const refreshToken = request.cookies.refreshToken;
        const result = await AuthenticationService.refreshToken(refreshToken);

        clearTokensFromCookies(response);
        setResponseHeaders(response, result);

        return response.status(200).json({
            message: 'Done!!.'
        });

    } catch (error) {
        return response.status(401).json({
            success: false,
            message: "Invalid refresh token",
        });
    }
}

const signOut = async (request: Request, response: Response) => {
    try {
        const refreshToken = request.cookies.refreshToken;
        const result = await AuthenticationService.signOut(refreshToken);

        clearTokensFromCookies(response);

        return response.status(200).json({ data: result });

    } catch (error) {
        return response.status(500).json({
            success: false,
            message: "Logout failed",
        });
    }
}

function clearTokensFromCookies(response: Response) {
    response.clearCookie('refreshToken', {
        httpOnly: true,
        secure: true,
        sameSite: 'none'
    });

    response.clearCookie('accessToken', {
        httpOnly: true,
        secure: true,
        sameSite: 'none'
    });
}

function setResponseHeaders(response: Response, result: { accessToken: string, refreshToken: string }) {
    response.cookie("accessToken", result.accessToken, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 15 * 60 * 1000,
    })

    response.cookie("refreshToken", result.refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 7 * 24 * 60 * 60 * 1000
    })
}

export { signUp, signIn, signOut, refreshToken };