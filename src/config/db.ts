import { PrismaClient } from "../../prisma/generated/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

const db = new PrismaClient({
    adapter: new PrismaPg({
        connectionString: process.env.DATABASE_URL!,
    })
});

async function connectDatabases(): Promise<void> {
    try {
        await Promise.all([db.$connect()]);
        console.log("All databases connected successfully");

    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1);
    }
}

async function disconnectDatabases(): Promise<void> {
    await Promise.all([
        db.$disconnect()
    ]);
}

export { db, connectDatabases, disconnectDatabases };