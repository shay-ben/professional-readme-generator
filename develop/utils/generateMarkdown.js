// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string\
function renderLicenseBadge(license) {
  license === "NONE"
  ? ""
  : `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  license === "None" ? "" : `6. [License](#license)`;

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  license === "None"
  ? ""
  : `## License    
Licensed under the ${license} license.`;

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}







  

  ## Licensing:
  License used for this project - ${data.license}

  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Additional Info](#additional-info)

  ## Description:

  ${data.description}

  ## Installation:

  ${data.installation}

  ## Usage:
  ${data.usage}

  ## License:

  ${data.licensing}

  ## Contribution:
  ${data.contribution}

  ## Testing:
  ${data.testing}
  
  ## Additional Info:
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email} `;
}

module.exports = generateMarkdown;

