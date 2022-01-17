const inquirer = require('inquirer');
const copyFile = require('fs/promises').copyFile;
const writeFile = require('fs/promises').writeFile;
const readFile = require('fs/promises').readFile;
const asciiArt = require('ascii-art')

// Default values
const TEMPLATE_SRC_README = './template/README.md';
const TOOLS_TARGET_FOLDER = './tools';
const TOOLS_CONFIG_FILE_PATH = './webapp/src/config/tools.ts';

const sexyIntro = () => {
    asciiArt.font('SecSI', 'default', true)
}

const setToolInfo = async () => {
    const questions = [
        {
            type: 'input',
            name: 'fancy_name',
            message: 'What is the (fancy) name of the Tool?',
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the Docker Image? (in the format <organization/image>)',
            validate(value) {
                const pass = value.match(
                    /(\w+)\/(\w+)/gm
                );
                if (pass) {
                  return true;
                }
          
                return 'Please enter a valid Docker Image (in the format <organization/image>)';
            },
        },
        {
            type: 'input',
            name: 'official_doc',
            message: 'What is the link to the official documentation?',
            validate(value) {
                const pass = value.match(
                    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gm
                );
                if (pass) {
                  return true;
                }
          
                return 'Please enter a valid link (starting with "http(s)://"';
            },
        },
        {
            type: "confirm",
            name: "is_finished",
            message: "Check the data, is everything ok?",
        },
    ]

    try { 
        const answers = await inquirer.prompt(questions);
        if (answers.is_finished) {
            return answers
        }
        else {
            return setToolInfo()
        }
    }
    catch (e) {
        console.error("An error occurred while parsing your answers.")
        console.error(e)
    }
}

const beautifyObjectConfig = (config) => {
    const TAB_SPACES = "    "
    const jsonConfig = JSON.stringify(config, null, " ")
    let configArray = jsonConfig.split('\n')
    configArray = configArray.map((line) => line.replace(" ", TAB_SPACES+TAB_SPACES).replace('"',"").replace('"',""))
    configArray[0] = TAB_SPACES+configArray[0]
    configArray[configArray.length-1] = TAB_SPACES+configArray[configArray.length-1]+","
    return configArray.join("\r\n")
}

const main = async () => {
    //sexy_intro()
    try {
        const answers = await setToolInfo()
        const config = {
            fancy_name: answers.fancy_name,
            name: answers.name.split('/')[1],
            organization: answers.name.split('/')[0],
            official_doc: answers.official_doc,
        }

        await copyFile(TEMPLATE_SRC_README, `${TOOLS_TARGET_FOLDER}/${config.name}.md`)
        console.log(`Template documentation copied in ${TOOLS_TARGET_FOLDER}/${config.name}.md`);
        
        const fileData = await readFile(TOOLS_CONFIG_FILE_PATH, 'utf8')
        let dataArray = fileData.split("\r\n")
        const beautifiedConfig = beautifyObjectConfig(config)
        dataArray.splice(-1, 0, beautifiedConfig)
        const data = dataArray.join("\r\n")
        
        await writeFile(TOOLS_CONFIG_FILE_PATH, data)
        
        console.log(`The following object has been added to the file '${TOOLS_CONFIG_FILE_PATH}':`)
        console.log(config)
    }
    catch (e) {
        console.error("An error occurred while editing files.")
        console.error(e)
    }
}

main()