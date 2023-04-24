import path from 'path';
import { stat } from 'fs/promises'
import { fileURLToPath } from 'url';

// Package directories
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const TOOLS_PATH = `${rootDir}/src/library`;

const main = async () => {
  try {
    await stat(TOOLS_PATH);
    console.log("[+] 'library' folder found.");
  } catch (e) {
    console.log(
      "[-] Missing 'library' folder. Execute 'pnpm fetch-tools' from the main folder."
    );
    throw e;
  }
};

main();
