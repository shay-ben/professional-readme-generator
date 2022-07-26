// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string\
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";

  } else if (license === "Mozilla") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";

  } else if (license === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";

  } else if (license === "NONE"){
    return "";
  }
}

//these can be done in one function
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Licensing:
  ${renderLicenseBadge(data.license)}
 

  ## Description:
    - ${data.description}

  ## Table of Contents 
  - [License](#license)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Additional Info](#additional-info)


  ## Licensing:
  [![license](https://img.shields.io/badge/license-${data.licensing}-blue)](https://shields.io)

 
  ## Installation:
  -${data.installation}

  ## Usage:
  -${data.usage}

  ## License:
  -${data.licensing}

  ## Contribution:
  -${data.contribution}

  ## Testing:
  -${data.testing}

  ## Additional Info:
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email} `;
}

module.exports = generateMarkdown;