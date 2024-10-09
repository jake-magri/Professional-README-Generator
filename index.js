// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";

// TODO: Create an array of questions for user input
const questions = [
    
    {
        type: 'input',
        name: 'projectTitle',
        message: "What is your project title?"
    },
    {
        type: 'input',
        name: 'description',
        message: "What is your description?"
    },
    {
        type: 'input',
        name: 'installIntstructions',
        message: "What is your installation instructions?"
    },
    {
        type: 'input',
        name: 'usageInformation',
        message: "What is your usage information?"
    },
    {
        type: 'input',
        name: 'contributionGuidelines',
        message: "What is your contribution guidelines?"
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: "What is your test instructions?"
    },
    {
        type: "list",
        name: "license",
        message: "Pick a license:",
        choices: ['MIT License','Eclipse Public License 2.0','Mozilla Public License 2.0']
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub?"
    },
    {
        type: "input",
        name: "emailAddress",
        message: "What is your email address?"
    }
    
    
];

const licenseBadge = function (license) {
    if (license==="MIT License"){
        return `![${license}](https://img.shields.io/badge/MIT%20License-purple)`;
    } else if (license==="Eclipse Public License 2.0") {
        return `![${license}](https://img.shields.io/badge/Eclipse%20Public%20License%202.0-purple)`;
    } else if (license==="Mozilla Public License 2.0") {
        return `![${license}](https://img.shields.io/badge/Mozilla%20Public%20License%202.0-purple)`;
    }
}
const generateReadme = ({projectTitle,description,installInstructions, usageInformation, contributionGuidelines, testInstructions, license, github, emailAddress}) => 
`# ${projectTitle}
### ${licenseBadge(license)}
## Description

${description}

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [How to Contribute](#How to Contribute)
- [Tests](#Tests)
- [License](#license)
- [Questions](#questions)

## Installation

${installInstructions}

## Usage

${usageInformation}

## How to Contribute

${contributionGuidelines}

## Tests

${testInstructions}

## License

${license}

## Questions

To reach me with additional questions please message me on either [GitHub](${github}) or [email](${emailAddress}).


`;




// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmePageContent = generateReadme(answers);

        writeToFile("README.txt", readmePageContent);
    });
}

// Function call to initialize app
init();
