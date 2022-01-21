const fs = require("fs-extra");

// Default values
const INPUT_DIR = './tools';
const OUTPUT_DIR = './webapp/src/_tools'

const sexyIntro = () => {
    console.log("  _____               _____  _____ ")
    console.log(" / ____|             / ____||_   _|")
    console.log("| (___    ___   ___ | (___    | |  ")
    console.log(" \\___ \\  / _ \\ / __| \\___ \\   | |  ")
    console.log(" ____) ||  __/| (__  ____) | _| |_ ")
    console.log("|_____/  \\___| \\___||_____/ |_____|")
    console.log("")
}

const main = async () => {
    sexyIntro();
    try {
        console.log("[+] Copying tools folder...")
        await fs.copy(INPUT_DIR, OUTPUT_DIR)
        console.log('[+] Tools folder successfully copied.')
    } 
    catch (err) {
        console.error(err)
    }
}

main()