const inquirer = require('inquirer');
const copyFile = require('fs/promises').copyFile;
const asciiArt = require('ascii-art')

// Default values
TEMPLATE_SRC_README = './template/README.md';
TOOLS_TARGET_FOLDER = './src/_tools'

const sexy_intro = () => {
    asciiArt.font('SecSI', 'default', true)
}

const main = async () => {
    //sexy_intro()
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

        }
    ]

    try {
        const answers = await inquirer.prompt(questions);
        const config = {
            fancy_name: answers.fancy_name,
            name: answers.name.split('/')[1],
            organization: answers.name.split('/')[0],
            official_doc: answers.official_doc,
        }

        await copyFile(TEMPLATE_SRC_README, `${TOOLS_TARGET_FOLDER}/${config.name}`)

        console.log(`Template documentation copied in ${TOOLS_TARGET_FOLDER}/${config.name}.md`);
        console.log(`Now you have to add the following Object to the file './src/config/tools.ts':`)
        console.log(config)
    }
    catch (e) {
        console.log("An error occurred while parsing your answers.")
        console.log(e)
    }
}

main()