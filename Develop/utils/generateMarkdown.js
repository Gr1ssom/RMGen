// Function to return a license badge based on the license selected
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
  // Add more license options and their corresponding badges here
  // Example: if (license === 'Apache 2.0') { return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'; }
  return '';
}

// Function to return the license link
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '[MIT License](https://opensource.org/licenses/MIT)';
  }
  // Add more license options and their corresponding links here
  return '';
}

// Function to return the license section of the README
function renderLicenseSection(license) {
  if (license) {
    return `## License
This project is covered under the ${renderLicenseLink(license)} license.`;
  }
  return '';
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions or inquiries, please reach out to me:

GitHub Profile: [${data.github}](https://github.com/${data.github})

Email: ${data.email}
`;
}

module.exports = generateMarkdown;
