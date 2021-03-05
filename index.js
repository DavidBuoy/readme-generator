
// External Package
const inquirer = require('inquirer');
const fs = require('fs');

// Internal Package
const generateMarkdown = require('./utils/generateMarkdown.js');


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
            message: 'What is your GitHub user name? (PLEASE DO NOT INCLUDE URL - NAME ONLY - )',
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



const init = () => {
    questions().then((answers) => {
        try {
            const md = generateMarkdown(answers);
            
            fs.writeFileSync('README_GENERATOR.md', md);
            
            console.log('Successfully wrote to README_GENERATOR.md');
        }
        catch (error) {
            console.log(error);
        }
    });
};


init();
