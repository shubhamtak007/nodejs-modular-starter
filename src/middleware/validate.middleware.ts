import { z, ZodType } from "zod";
import { NextFunction, Request, response, Response } from "express";

export default function validate(schema: ZodType) {
    return (request: Request, response: Response, next: NextFunction) => {
        try {
            schema.parse(request.body);
            next();
        } catch (error) {
            if (error instanceof z.ZodError) {
                const errorMessageList = JSON.parse(error.message);

                return response.status(400).json({
                    message: `${errorMessageList[0].path}: ${errorMessageList[0].message.split(':')[1]}`
                })
            } else {
                return response.status(400).json({
                    message: 'Invalid Credentials!!'
                })
            }
        }
    };
}