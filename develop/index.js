// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a description of your project",
  },
  {
    type: "input",
    name: "installation",
    message: "How would you install this program?",
  },
  {
    type: "input",
    name: "usage",
    message: "How would you use this program?",
  },
  {
    type: "input",
    name: "contribution",
    message:
      "How should people contribute to this project?",
  },
  {
    type: "input",
    name: "testing",
    message: "Please specify how you would run a test for this application",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Please choose the license you would want the project to have",
    choices: ["MIT", "APACHE", "MOZZILA-PUBLIC", "NONE"],
  },
  {
    type: "input",
    name: "github",
    message: "Enter GitHub username:",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) => {
    if (err)
      throw err;
      console.log("Success! you have generated a README file!")

  });
};

// TODO: Create a function to initialize app
const init = () => {
  inquirer.prompt(questions).then((userInput) => {
    writeToFile("README.md", generateMarkdown(userInput));
  });
};


// Function call to initialize app
init();