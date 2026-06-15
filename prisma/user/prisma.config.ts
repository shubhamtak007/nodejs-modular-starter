import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
    schema: "./../user",
    migrations: {
        path: "./migrations",
    },
    datasource: {
        url: process.env.DATABASE_URL,
    },
});

