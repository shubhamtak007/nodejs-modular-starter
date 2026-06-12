import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const options: swaggerJsdoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API",
            version: "1.0.0",
            description: "API documentation",
        },
        servers: [
            {
                url: "http://localhost:5000/api/v0",
            },
        ],
    },

    apis: [
        "./src/**/*.ts",
    ],
};

const swaggerSpec = swaggerJsdoc(options);

export const setupSwagger = (app: Express) => {
    app.use(
        "/docs",
        swaggerUi.serve,
        swaggerUi.setup(swaggerSpec)
    );
};