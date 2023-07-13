// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // Implement logic to return the appropriate license badge based on the license input
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // Implement logic to return the appropriate license link based on the license input
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // Implement logic to return the appropriate license section based on the license input
}

// Function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

${licenseBadge}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${licenseLink}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${licenseSection}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For additional questions, please contact [${data.name}](https://github.com/${data.username}) via email at ${data.email}.
`;
}

module.exports = generateMarkdown;
