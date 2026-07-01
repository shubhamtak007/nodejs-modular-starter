import { execSync } from "child_process";

const schemas = [
    "./prisma/auth",
    "./prisma/user",
];

for (const schema of schemas) {
    execSync(`prisma generate --schema=${schema}`, {
        stdio: "inherit",
    });
}