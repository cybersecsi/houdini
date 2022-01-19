# 🐳 HOUDINI: Hundreds of Offensive and Useful Docker Images for Network Intrusion
HOUDINI is a curated list of **Network Security** related Docker Images for Network Intrusion purposes. A lot of images are created and kept updated through our [RAUDI](https://github.com/cybersecsi/RAUDI) repository. Pretty dope, eh?

[![Documentation](https://img.shields.io/badge/Documentation-complete-green.svg?style=flat)](https://github.com/cybersecsi/HOUDINI/blob/main/README.md)
[![Netlify Status](https://api.netlify.com/api/v1/badges/f8b06b7e-bdc6-4af8-aba9-f32e1132cd25/deploy-status)](https://app.netlify.com/sites/houdini/deploys)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://github.com/cybersecsi/HOUDINI/blob/main/LICENSE)

## Table of Contents
  - [Web App](#web-app)
  - [Add a Tool](#add-a-tool)
  - [Development](#development)
  - [Credits](#credits)
  - [License](#license)

## Web App
To use HOUDINI, click the link below: 
- https://houdini.secsi.io

## Add a tool
To add a new tool you have to:
- Add it to the configuration (*webapp/src/config/tools.ts*)
- Add a **Markdown** file in the tools directory (*tools/*)
You may do it manually or you may use the **bootstrap** command:
```
yarn run bootstrap
```

This command automatically copies a template Markdown in the tools directory and adds the **JavaScript Object** in the config file.

## Development
This section provides a set of commands to run the application locally. 

PLEASE use **yarn** over **npm**

### Setup
This is a **React** based application. Before running it you have to install all the needed packages with the following command:
```
yarn install && cd ./webapp && yarn install
```

### Run
To execute the app locally you have to run:
```
yarn start
```

### Build
To build the app you have to run:
```
yarn run build
```

## Roadmap
Here is the current roadmap:
- [ ] Responsive Design
- [ ] Add copy botton in ``<code>`` tags
- [ ] Fix margin, padding in tool pages to make it more readable
- [ ] Define customizable fields
- [ ] Add tools (reach at least 100)
- [ ] Add toolbox for customizing commands
- [ ] Add webapp snippet
- [ ] Add ``bashify`` script

## Credits
HOUDINI is proudly developed [@SecSI](https://secsi.io) by:
- [Angelo Delicato](https://github.com/thelicato)
- [Daniele Capone](https://github.com/daniele-capone)
- [Emanuele Galdi](https://github.com/emalderson)

## License
**HOUDINI** is an open-source and free software released under the [GNU GPL v3](/LICENSE).
