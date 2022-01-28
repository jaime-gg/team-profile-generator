// MODULES
const fs = require('fs'); 
const inquirer = require('inquirer');

// TEAM CLASSES
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');
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
            message: "What is the manager's name?", 

            validate: name => {
                if (name) {
                    return true;
                } else {
                    return "Please enter a valid name!"; 
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
                    return "Please enter a valid ID!"; 
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
                    return 'Please enter a valid email!'; 
                }
            }
        },
        // OFFICE NUMBER
        {
            type: 'input',
            name: 'office',
            message: "What's the manager's office number?",

            validate: office => {
                if  (isNaN(office)) {
                    return 'Please enter a valid office number!'; 
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerData => {
        const  { name, id, email, officeNumber } = managerData; 
        // CALL THE MANAGER CLASS
        const manager = new Manager (name, id, email, officeNumber);

        // PUSH THE MANAGER ONTO THE TEAM ARRAY
        teamArr.push(manager); 
    })
}

// EMPLOYEE QUESTIONS
const inputEmployee = () => {
    console.log(`Thank you for that information. Now let's add another member to this team!`)
    return inquirer.prompt ([
        // TYPE OF ROLE
        {
            type: 'list',
            name: 'role',
            message: "What is this employee's role?",
            choices: ['Engineer', 'Intern']
        },
        // NAME
        {
            type: 'input',
            name: 'name',
            message: "What's the name of the employee?", 

            validate: name => {
                if (name) {
                    return true;
                } else {
                    return "Please enter a valid name!"; 
                }
            }
        },
        // ID
        {
            type: 'input',
            name: 'id',
            message: "What is their employee ID?",

            validate: id => {
                if  (isNaN(id)) {
                    return "Please enter a valid ID!"; 
                } else {
                    return true;
                }
            }
        },
        // EMAIL
        {
            type: 'input',
            name: 'email',
            message: "What is the email address of the employee?",

            validate: email => {
                if (email) {
                    return true;
                } else {
                    return 'Please enter a valid email!'; 
                }
            }
        },
        // GITHUB - ENGINEER ONLY
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's github username.",
            when: (input) => input.role === "Engineer",
            validate: github => {
                if (github ) {
                    return true;
                } else {
                    return "Please enter a valid github username!"
                }
            }
        },
        // SCHOOL - INTERN ONLY
        {
            type: 'input',
            name: 'school',
            message: "Where does the intern attend school?",
            when: (input) => input.role === "Intern",
            validate: school => {
                if (school) {
                    return true;
                } else {
                    return "Please enter a valid school!"
                }
            }
        },
        // EXIT OR ADD ANOTHER
        {
            type: 'confirm',
            name: 'addAnother',
            message: 'Would you like to add another team member?',
            default: false
        }
    ])
    .then(employeeData => {
        const {name, id, email, role, github, school, addAnother} = employeeData; 

        // CREATES A NEW ENGINEER TRIGGERED BY ROLE
        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github)
        }

        // CREATES A NEW INTERN TRIGGERED BY ROLE
        if (role === "Intern") {
            employee = new Intern (name, id, email, school)
        }

        // PUSHES NEW EMPLOYEE ONTO THE TEAM ARRAY
        teamArr.push(employee); 

        // USES CONFIRMATION TO EITHER LOOP THROUGH QUESTIONS AGAIN, OR PUSH ARRAY AS IS
        if (addAnother) {
            return inputEmployee(teamArr); 
        } else {
            return teamArr;
        }

    })

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