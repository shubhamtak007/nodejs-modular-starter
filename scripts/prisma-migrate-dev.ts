import { execSync } from "child_process";

const configs = [
    "./prisma/auth/prisma.config.ts",
    "./prisma/user/prisma.config.ts",
];

for (const config of configs) {
    execSync(`prisma migrate dev --config=${config}`, {
        stdio: "inherit",
    });
}
