// In addition to Employee's properties and methods, Manager will also have:

const Employee = require("./Employee");

//  Properties: 
//      - Office Number
//  Methods: 
//      - getRole() // Returns 'Manager'

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

