const stat = require('fs/promises').stat;

const TOOLS_PATH = './src/_tools'

const main = async () => {
    try {
        await stat(TOOLS_PATH)
        console.log("[+] '_tools' folder found.")
    }
    catch (e) {
        console.log("[-] Missing '_tools' folder. Execute 'yarn <command>' from the main folder.")
        throw e;
    }
}

main()