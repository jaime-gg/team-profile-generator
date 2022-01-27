// In addition to Employee's properties (use super) and methods, Engineer will also have:

//  Properties: 
//      - Github
//  Methods: 
//      - getGithub()
//      - getRole() // Overridden to return 'Engineer'

// import the employee constructor
const Employee = require("./Employee");

// extending from emplyee allows for the use of 'super' to inherit data
class Engineer extends Employee {
    constructor(name, id, email, github) {
        // inherit from emplyee cunstructor
        super (name, id, email);
        this.github = github; 
    }
    // return the given github information
    getGithub(){
        return this.github;
    }
    // this should overide the role portion assigned in employee
    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer; 