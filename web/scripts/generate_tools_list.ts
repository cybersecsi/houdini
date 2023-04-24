import { dirname, resolve } from "path";
import { readdir, writeFile } from 'fs/promises'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const toolsListFile = resolve(__dirname, "..", "src", "config", "tools.json");
const libraryFolder = resolve(__dirname, "..", "src", "library");


const createToolsFile = async () => {
  const res = await readdir(libraryFolder);
  const toolsList = {
    tools: res
  }
  await writeFile(toolsListFile, JSON.stringify(toolsList, null, 2));
}

const main = () => {
  console.log("Generating 'tools.json' file");
  createToolsFile()
  console.log("'tools.json' generation completed!");
};

main();
