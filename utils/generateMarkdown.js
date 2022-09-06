// TODO: Create a function that returns a license badge based on which license is passed in

function generateLicenseBadge(license){
  let licenseLinks = {
    MIT: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
    BSD_2: `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`,
    GNU_GPL_3: `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`,
  };
  return licenseLinks[license]
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
let license = generateLicenseBadge(data.license);
  return `
  # ${data.projectTitle}

  ## Contents
  - [Description](#Description)
  - [Installation Instruction](#Installation)
  - [Usage](#Usage)
  - [Contribution](#Contribution)
  - [Test](#Test)
  - [License](#License)
  // add github username , user email

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contribution}

  ## Test
  ${data.test}

  ## License
  ${license}

   ## Github
  
  // github & email

`;
}

module.exports = generateMarkdown;
