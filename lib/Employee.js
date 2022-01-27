// The first class is an Employee parent class

//  Properties: 
//      - Name
//      - ID
//      - Email
//  Methods: 
//      - getName()
//      - getId()
//      - getEmail()
//      - getRole() // Returns 'Employee'

class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // should return the inputed name 
    getName() {
        return this.name;
    }
    // should return the inputed id 
    getId() {
        return this.id;
    }
    // should return the inputed email 
    getEmail() {
        return this.email;
    }
    // should always return employee, this will hopefully be overwritten by the other classes. 
    getRole() {
        return 'Employee';
    }
}; 

module.exports = Employee; 