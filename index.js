// TODO: Include packages needed for this application
   const inquirer = require("inquirer");
   const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

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
          name: "installation instruction",
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
          choices: [
           "MIT", "BSD_2", "GNU"
          ],
        },
      ])
      .then((answers) => {
        // console.info("Answer:", answers.projectTitle);
        // console.info("Answer:", answers.description);
        // console.info("Answer:", answers.installation instruction);
        // console.info("Answer:", answers.usage);
        // console.info("Answer:", answers.contribution);
        // console.info("Answer:", answers.test);
        // console.info("Answer:", answers.license);
        generateMarkdown(answers);
      });
}

// Function call to initialize app
init();
