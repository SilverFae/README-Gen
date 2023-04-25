// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    const badges = {
      'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      'Boost': '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
      'Elcipse': '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
      'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    };
    return badges[license] || '';
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    const links = {
      'MIT': '[MIT License](https://opensource.org/license/mit/)',
      'Boost': '[Boost License](https://opensource.org/license/bsl1-0-html/)',
      'Elcipse': '[Eclipse License](https://opensource.org/license/epl-1-0/)',
      'Apache 2.0': '[Apache 2.0 License](https://opensource.org/license/apache-2-0/)',
    };
    return links[license || ''];
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    const badge = renderLicenseBadge(license);
    const link = renderLicenseLink(license);
    return `${badge} This project is licensed under ${link} license.`;
  }
  return '';
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # Description
  ${data.description}
  
  # Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

  # Installation
  ${data.installation}
  # Usage
  ${data.usage}
  # Contribution
  ${data.contribution}
  # Test
  ${data.test}
  # Questions
  * Github : [@${data.github}](https://github.com/${data.github})
  * Email: ${data.email}
  # License
  ${renderLicenseSection(data.badge)}
`;
}

module.exports = generateMarkdown;
