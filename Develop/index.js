// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
const markdown = require('./utils/generateMarkdown')
//   generateMarkdown,
//   renderLicenseBadge,
//   renderLicenseLink,
//   renderLicenseSection,

// TODO: Create an array of questions for user input
const questions = [
    'What is the title of your project?',
    'Write a brief description of your application(s).',
    'How does a user install your application(s)?',
    'How does a user use your application(s)?',
    'Which license would you like to use?',
    'Please provide instructions for contribution.',
    'How would a contributer test their addition(s)/edit(s)?',
    'What is your GitHub username?',
    'What is your E-mail adress?',
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
        err ? console.log(err) : console.log('Success! Please note that if a license has been chosen, you must input the year and your information in the License section.')
    )
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt([
    {
      type: 'input',
      message: questions[0],
      name: 'title',
      validate: markdown.validateInput(),
    },
    {
      type: 'input',
      message: questions[1],
      name: 'description',
      validate: markdown.validateInput(),
    },
    {
      type: 'input',
      message: questions[2],
      name: 'install',
      validate: markdown.validateInput(),
    },
    {
      type: 'input',
      message: questions[3],
      name: 'use',
      validate: markdown.validateInput(),
    },
    {
      type: 'list',
      message: questions[4],
      choices: ['MIT', 'Apache 2.0', 'GNU GPL 3.0', 'The Unlicense', 'N/A'],
      name: 'license',
    },
    {
      type: 'input',
      message: questions[5],
      name: 'contribute',
      validate: markdown.validateInput(),
    },
    {
      type: 'input',
      message: questions[6],
      name: 'add',
      validate: markdown.validateInput(),
    },
    {
      type: 'input',
      message: questions[7],
      name: 'github',
      validate: markdown.validateInput(),
    },
    {
      type: 'input',
      message: questions[8],
      name: 'email',
      validate: markdown.validateInput(),
    },
  ])
  .then((response) =>
    writeToFile('README.md', markdown.generateMarkdown(response))
  )
}



// Function call to initialize app
init();