// In addition to Employee's properties and methods, Manager will also have:

//  Properties: 
//      - Office Number
//  Methods: 
//      - getRole() // Returns 'Manager'

// import the employee constructor
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, office){
        super (name, id, email);
        this.officeNum = office;
    } 
    // this should overide the role portion assigned in employee
    getRole(){
        return "Manager";
    }
}

module.exports = Manager; 

