// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badgeLink;
  if (license==="MIT License"){
      badgeLink = `https://img.shields.io/badge/MIT%20License-purple`;
  } else if (license==="Eclipse Public License 2.0") {
      badgeLink = 'https://img.shields.io/badge/Eclipse%20Public%20License%202.0-purple';
  } else if (license==="Mozilla Public License 2.0") {
      badgeLink = 'https://img.shields.io/badge/Mozilla%20Public%20License%202.0-purple';
  } else {
    return '';
  }
  return `![License](${badgeLink})`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;
  if (license==="MIT License"){
    licenseLink = `https://opensource.org/licenses/MIT`;
  } else if (license==="Eclipse Public License 2.0") {
    licenseLink = `https://www.eclipse.org/legal/epl-2.0/`;
  } else if (license==="Mozilla Public License 2.0") {
    licenseLink = `https://www.mozilla.org/en-US/MPL/2.0/`;
  } else {
    return ``;
  }
  return `See the [full license](${licenseLink}) for more information.`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return (license) ? `## License` : '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({projectTitle, description, installInfo, usageInformation, contributionGuidelines, testInstructions, license, github, emailAddress, attachmentName}) {
  return `# ${projectTitle}
${renderLicenseBadge(license)}

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

${installInfo}

## Usage

### Video Demo
![Video demo of application.](assets/videos/${attachmentName})

### Usage Information
${usageInformation}

## How to Contribute

${contributionGuidelines}

## Tests

${testInstructions}

${renderLicenseSection(license)}
This application is covered under ${license}.
${renderLicenseLink(license)}

## Questions

To reach me with additional questions please message me on either GitHub at ${github} or via email ${emailAddress}.`
;

}

export default generateMarkdown;
