// Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import "./utils/generateMarkdown.js";
import generateMarkdown from "./utils/generateMarkdown.js";

// Create an array of questions for user input
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
        name: 'installInfo',
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
    },
    {
        type: "list",
        name: "attachment",
        message: "Do you have an attachment?",
        choices: ['Yes', 'No']
    },
    {
        type: 'input',
        name: 'attachmentName',
        message: 'Please add file to videos directory and provide the name of the file.',
        when: (answers) => answers.attachment === 'Yes' // gets attachment question response and only shows question if the user selects 'Yes' https://www.npmjs.com/package/inquirer
    }
    
];

// declare generate readme using badgeLink and prompt responses to structure in markdown

const generateReadme = function (answers) {
    return `${generateMarkdown(answers)}`
}

// function to write README file using fs import
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

// Function to initialize app calling generate readme and write to file.
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmePageContent = generateReadme(answers);

        writeToFile("generatedREADME.md", readmePageContent);
    });
}

// Function call to initialize app
init();
