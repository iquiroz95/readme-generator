//Define constants
//fs is the module being used. This also required installing an 'inquirer' npm package
const inquirer = require('inquirer');
const fs = require('fs');

//what we will ask the user
inquirer
  .prompt([
    {
      type: 'input',
      name: 'gitUserName',
      message: 'What is your Github username?',
      validate: function (input) { 
        return input.length > 3
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your Email?',
      validate: function (input) { 
        return input.length > 3
      }
    },
    {
      type: 'input',
      name: 'projectTitle',
      message: 'Project Title?',
      validate: function (input) { 
        return input.length > 3
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Project description:',
      validate: function (input) { 
        return input.length > 3
      }
    },
    //This one was difficult to figure out but 'checkbox' seemed to make it work.
    {
      type: 'checkbox',
      message: 'What kind of of License will your project have?',
      name: 'license',
      choices: ['GPL 3.0','Apache 2.0', 'BSD 3', 'None', 'MIT'],
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What command should be run to install dependencies?',
      validate: function (input) { 
        return input.length > 3
      }
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What command should be run to run tests?',
      validate: function (input) { 
        return input.length > 3
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is needed to be known about using this repo?',
      validate: function (input) { 
        return input.length > 3
      }
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'What needs to be known about contributing to this repo?',
      validate: function (input) { 
        return input.length > 3
      }
    },


  ])


  .then((data) => {
    const filename = 'README.md';
    const readmeContent = generateReadme(data);

    fs.writeFile(filename, readmeContent, (err) => {
      if (err) {
        console.error('Error writing README file:', err);
      } else {
        console.log(`README file "${filename}" generated successfully.`);
      }
    });
  });
  
  
// Function to generate the README content
function generateReadme(data) {
  return `
# ${data.projectTitle}

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

## License

${data.license}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

For any questions, please contact ${data.gitUserName} via:

- Email: ${data.email}
- GitHub: [${data.gitUserName}](https://github.com/${data.gitUserName})
`;
}




// Sample data to be used for generating the README
const readmeData = {
  title: 'My Awesome Project',
  description: 'This is a description of my awesome project.',
  email: 'john.doe@example.com',
  github: 'johndoe',
  stack: 'list',
  contact: 'How to reach me',
};

// Function to write the README content to a file
function generateReadmeFile(data, filename) {
  const readmeContent = generateReadme(data);

  fs.writeFile(filename, readmeContent, (err) => {
    if (err) {
      console.error('Error writing README file:', err);
    } else {}
  });
}

// Call the function to generate the README file
generateReadmeFile(readmeData, 'README.md');


