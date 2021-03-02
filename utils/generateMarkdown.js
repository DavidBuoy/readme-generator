function generateReadme(answers) {
  return `

<h1 align="center">${answers.projectName}</h1>
<h5 align="center">${answers.name} </h5> 
<h5 align="center">${answers.subProjectName} </h5>
<br>

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contact Info ](#Contact-Info:)
<br>
<br>

## Description
${answers.description}

<br>
<br>

## Installation
${answers.install}
<br>
<br>

## Usage
${answers.usage}
<br>
<br>

## License

![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen?style=for-the-badge)
<br>
This application is covered by the ${answers.license} license.
<br>
<br>
<hr style="border:1px solid white"> </hr>
<br>

## Contact Info:
${answers.name}

Find me on GitHub:

<a href="https://github.com/${answers.github}">
        <img alt="GitHub Link" src="https://img.shields.io/badge/GitHub-${answers.github}-brightgreen?style=for-the-badge&logo=github" target="_blank" />
</a>

<br>
Email me with any questions: ${answers.email}
<br>

`;
}

module.exports = generateReadme;
