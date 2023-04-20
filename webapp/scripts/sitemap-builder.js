const path = require("path");
const readFile = require("fs/promises").readFile;
const writeFile = require("fs/promises").writeFile;
const stat = require("fs/promises").stat;

// Package directories
const currentDir = path.dirname(require.main.filename);
const webappDir = path.dirname(currentDir);

// Default values
const DOMAIN = "https://houdini.secsi.io";
const TOOLS_CONFIG_FILE_PATH = `${webappDir}/src/config/tools.json`;
const BUILD_PATH = `${webappDir}/build`;

const checkIfBuildExists = async () => {
  try {
    await stat(BUILD_PATH);
    console.log("[+] 'build' folder found.");
  } catch (e) {
    console.error(
      "[-] Missing 'build' folder. Execute 'yarn run build' first."
    );
    process.exit(1);
  }
};

const getTools = async () => {
  try {
    const jsonToolsFile = await readFile(TOOLS_CONFIG_FILE_PATH, "utf8");
    const tools = JSON.parse(jsonToolsFile);
    console.log("[+] Tools retrieved.");
    return tools.map((tool) => tool.name);
  } catch (e) {
    console.error("An error occurred while getting tools from tools.json");
    process.exit(1);
  }
};

const buildSitemap = async (domain, tools) => {
  let sitemapElements = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    `<url><loc>${domain}/</loc></url>`,
  ];

  const sitemapTools = tools.map((toolName) => {
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
