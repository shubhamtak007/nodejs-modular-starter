import { PrismaClient as AuthPrismaClient } from "../../prisma/generated/auth/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

const { Pool } = pg;

const authPool = new Pool({ connectionString: process.env.DATABASE_URL });
const authDb = new AuthPrismaClient({ adapter: new PrismaPg(authPool) });

async function connectDatabases(): Promise<void> {
    try {
        await Promise.all([authDb.$connect()]);
        console.log("All databases connected successfully");

    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1);
    }
}

async function disconnectDatabases(): Promise<void> {
    await Promise.all([
        authDb.$disconnect()
    ]);
}

export { authDb, connectDatabases, disconnectDatabases };