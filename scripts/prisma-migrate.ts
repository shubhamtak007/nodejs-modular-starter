import { execSync } from "child_process";

const configs = [
    "./prisma/auth/prisma.config.ts",
    "./prisma/user/prisma.config.ts",
];

for (const config of configs) {
    console.log(`\nRunning migrations for ${config}...`);

    execSync(`prisma migrate deploy --config=${config}`, {
        stdio: "inherit",
    });
}

console.log("\n✅ All migrations completed.");