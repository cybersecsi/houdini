const asciiArt = require('ascii-art')
const fs = require("fs-extra");

// Default values
const INPUT_DIR = './tools';
const OUTPUT_DIR = './webapp/src/_tools'

const sexyIntro = () => {
    asciiArt.font('SecSI', 'default', true)
}

const main = async () => {
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