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
    }
    
];

const generateReadme = ({projectTitle,description,installInstructions}) => 
`# ${projectTitle}

## Description

${description}

## Installation

${installInstructions}
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
