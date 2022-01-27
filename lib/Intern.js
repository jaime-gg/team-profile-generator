// In addition to Employee's properties and methods, Intern will also have:

//  Properties: 
//      - School
//  Methods: 
//      - getSchool()
//      - getRole() // Overridden to return 'Intern'

// import the employee constructor
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        // inherit from employee constructor
        super(name, id, email);
        this.school = school;
    };
    // return the given school information
    getSchool(){
        return this.school;
    };
    // this should overide the role portion assigned in employee
    getRole(){
        return 'Intern'; 
    }
};

module.exports = Intern;