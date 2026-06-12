import express from "express";
import cors from "cors";
import prisma from "./config/db.js";
import cookieParser from "cookie-parser";
import v0Routes from "./routes/v0/index.js";
import helmet from "helmet";
import { setupSwagger } from "./config/swagger.js";

const app = express();
app.use(express.json());
app.use(cookieParser());

const allowedOriginRegex = /^https:\/\/.*sub-domain\.app$/i;

app.use(cors({
    origin: [
        "http://localhost:3000",
        "your-project-domain",
        allowedOriginRegex
    ],
    credentials: true
}));

app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],

            connectSrc: [
                "'self'",
                "http://localhost:5000"
            ],
        },
    },
}));

app.use("/api/v0", v0Routes);

prisma;
setupSwagger(app);

export default app;