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
    return inquirer.prompt ([
        // NAME
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager for this team?', 

            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log ("  Please enter a valid name!");
                    return false; 
                }
            }
        },
        // ID
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's employee ID?",
            validate: id => {
                if  (isNaN(id)) {
                    console.log ("  Please enter a valid ID!")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        // EMAIL
        {
            type: 'input',
            name: 'email',
            message: "What is the email address of the manager?",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log ('  Please enter a valid email!')
                    return false; 
                }
            }
        },
        // OFFICE NUMBER
        {
            type: 'input',
            name: 'office',
            message: "Please enter the manager's office number",
            validate: office => {
                if  (isNaN(office)) {
                    console.log ('  Please enter a valid office number!')
                    return false; 
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerData => {
        const  { name, id, email, officeNumber } = managerData; 
        const manager = new Manager (name, id, email, officeNumber);

        teamArr.push(manager); 
    })
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