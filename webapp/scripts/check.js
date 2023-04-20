const path = require("path");
const stat = require("fs/promises").stat;

// Package directories
const currentDir = path.dirname(require.main.filename);
const webappDir = path.dirname(currentDir);

const TOOLS_PATH = `${webappDir}/src/_tools`;

const main = async () => {
  try {
    await stat(TOOLS_PATH);
    console.log("[+] '_tools' folder found.");
  } catch (e) {
    console.log(
      "[-] Missing '_tools' folder. Execute 'yarn <command>' from the main folder."
    );
    throw e;
  }
};

main();
