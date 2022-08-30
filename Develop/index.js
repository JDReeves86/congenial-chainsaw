// TODO: Include packages needed for this application
const fs = require('fs');
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
    'How does  auser use your application(s)?',
    'Please provide instructions for contribution.',
    'How would a contributer test their addition(s)/edit(s)?',
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
        err ? console.log(err) : console.log('Success!')
    )
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

writeToFile('README.md', markdown.generateMarkdown('Title!'))