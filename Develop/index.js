// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is the title of your project?"
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install the project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use the application?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Who contributed towards the project?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the steps to test the application'
    },
    {
        type: 'list',
        name: 'badge',
        message: 'What license are you using?',
        choices: ['MIT','Boost', 'Eclipse', 'Apache 2.0']
    },
    {
        type: 'input',
        name: 'github',
        message: 'what is your github username?',
        choices: []
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        choices: []
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('File written successfully!')
  );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=>{
        const markdownData = generateMarkdown(answers);
        writeToFile('README.md', markdownData);
    })
}

// Function call to initialize app
init();
