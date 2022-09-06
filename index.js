const fs = require("fs");

// TODO: Include packages needed for this application
   const inquirer = require("inquirer");
   const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFileSync('./output/README.md', data, (error)=>{
        error?console.error(error):console.log("readMe Generated")
    })
}

// TODO: Create a function to initialize app
function init() {
 

    inquirer
      .prompt([
        {
          name: "projectTitle",
          message: "What is your project title?",
        },
        {
          name: "description",
          message: "What is your description?",
        },
        {
          name: "installation",
          message: "What is your installation instruction?",
        },
        {
          name: "usage",
          message: "What is your usage information?",
        },
        {
          name: "contribution",
          message: "What is the contribution guidelines?",
        },
        {
          name: "test",
          message: "What is the test instructions?",
        },
        {
          type: "list",
          name: "license",
          message: "Which license do you want to select?",
          choices: ["MIT", "BSD_2", "GNU_GPL_3"],
        },
        {
          name: "github",
          message: "What is your Github username?",
        },
        {
          name: "email",
          message: "What is your email?",
        },
      ])
      .then((answers) => {
        let readMeContents = generateMarkdown(answers);
        writeToFile(readMeContents);
      });
}



// Function call to initialize app
init();
