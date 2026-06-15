import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
    schema: "./../auth",
    migrations: {
        path: "./migrations",
    },
    datasource: {
        url: process.env.DATABASE_URL,
    },
});

