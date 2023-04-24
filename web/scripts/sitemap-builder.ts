import path from "path";
import { stat, readFile, writeFile } from "fs/promises";
import { fileURLToPath } from "url";

// Package directories
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

// Default values
const DOMAIN = "https://houdini.secsi.io";
const TOOLS_CONFIG_FILE_PATH = `${rootDir}/src/config/tools.json`;
const BUILD_PATH = `${rootDir}/dist`;

const checkIfBuildExists = async () => {
  try {
    await stat(BUILD_PATH);
    console.log("[+] 'dist' folder found.");
  } catch (e) {
    console.error(
      "[-] Missing 'dist' folder. Execute 'pnpm build' first."
    );
    process.exit(1);
  }
};

const getTools = async () => {
  try {
    const jsonToolsFile = await readFile(TOOLS_CONFIG_FILE_PATH, "utf8");
    const toolsList = JSON.parse(jsonToolsFile);
    console.log("[+] Tools retrieved.");
    return toolsList.tools;
  } catch (e) {
    console.error("An error occurred while getting tools from tools.json");
    process.exit(1);
  }
};

const buildSitemap = async (domain: string, tools: string[]) => {
  let sitemapElements = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    `<url><loc>${domain}/</loc></url>`,
  ];

  const sitemapTools = tools.map((toolName: string) => {
    return `<url><loc>${domain}/tool/${toolName}</loc></url>`;
  });

  // Concat the two arrays
  sitemapElements = sitemapElements.concat(sitemapTools);

  // Close urlset
  sitemapElements.push("</urlset>");

  // Create xml
  const xml = sitemapElements.join("");

  try {
    await writeFile(`${BUILD_PATH}/sitemap.xml`, xml);
    console.log("[+] sitemap.xml correctly created.");
  } catch (e) {
    console.error("An error occurred while writing sitemap.xml");
    process.exit(1);
  }
};

const main = async () => {
  checkIfBuildExists();
  const tools = await getTools();
  buildSitemap(DOMAIN, tools);
};

main();
