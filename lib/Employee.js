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
}; 

module.exports = Employee; 