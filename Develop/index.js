// Required packages
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: "What is your project's title? ",
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project: ',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions: ',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage information: ',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide contribution guidelines: ',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions: ',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your application:',
    choices: ['MIT', 'Apache 2.0', 'GPLv3', 'BSD 3-Clause', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username: ',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address: ',
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('README.md file generated successfully!');
    }
  });
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    const markdown = generateMarkdown(data);
    writeToFile('README.md', markdown);
  });
}

// Function call to initialize app
init();
