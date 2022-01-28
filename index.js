// MODULES
const fs = require('fs'); 
const inquirer = require('inquirer');

// TEAM CLASSES
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// HTML PAGE GENERATOR 
const generatePage = require('./src/generatePage');

// TEAM
const teamArr = []; 


// QUESTIONS ------------------------------------------------------------------------------
// MANAGER QUESTIONS
const inputManager = () => {

}

// EMPLOYEE QUESTIONS
const inputEmployee = () => {
    
}

// PAGE GENERATOR -------------------------------------------------------------------------
// WRITE FILE FUNCTION
function writeToFile(data) {
    fs.writeFile('./dist/index.html', data, (err) => {
        // ternary operator to check for errors
        err ? console.log(err) : console.log("Your team profile has been successfully created in the 'dist' folder!") 
    });
}

// APPEND THE INPUTED DATA
inputManager()
  .then(inputEmployee)
  .then(teamArray => {
    return generatePage(teamArray);
  })
  .then(data => {
    return writeToFile(data);
  })
  .catch(err => {
    console.log(err);
  });