import { execSync } from "node:child_process";

console.log("Starting Vercel build...");

execSync("npm install", { stdio: "inherit" });
execSync("npm run build", { stdio: "inherit" });

console.log("Build completed.");
