// TODO: Include packages needed for this application
// External Package
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util')

// Internal Package
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () =>
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your FIRST and LAST name?',
        },

        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub user name?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your Email Address?',
        },
        {
            type: 'input',
            name: 'projectName',
            message: 'What is the name of your project?',
        },
        {
            type: 'input',
            name: 'subProjectName',
            message: 'If needed, Please give your project a description name - ie: Homework or Test Project. ',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please give a short description of your project.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select a license below',
            choices: ['MIT', 'APACHE', 'GPL', 'BSD', 'none',]
        },
        {
            type: 'input',
            name: 'install',
            message: 'What command should be run to install dependencies?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What command should be run to run the test?',
        },

    ]);

// TODO: Create a function to write README file

const init = () => {
    questions().then((answers) => {
        try {
            const md = generateMarkdown(answers);
            
            fs.writeFileSync('README.md', md);
            
            console.log('Successfully wrote to README.md');
        }
        catch (error) {
            console.log(error);
        }
    });
};

// TODO: Create a function to write README file

// Function call to initialize app
init();
