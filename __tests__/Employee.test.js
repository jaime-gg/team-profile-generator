const Employee = require('../lib/Employee.js') 

describe('Employee',() => {
    describe('generating the parent employee object', () => {
        it('construct an employee object', () => {
            // contains name, id number, email
            const employee = new Employee('jaime', 20,'jaime@email.com')

            expect(employee.name).toEqual(expect.any(String));
            expect(employee.id).toEqual(expect.any(Number));   
            expect(employee.email).toEqual(expect.any(String));               
        })
    })
    describe('getName',() => {
        it('method for getting name', () => {
            const employee = new Employee('jaime', 20,'jaime@email.com')

            expect(employee.getName()).toEqual(expect.stringContaining('jaime'));
        })
    })
    describe('getId',() => {
        it('method for getting id', () => {
            const employee = new Employee('jaime', 20,'jaime@email.com')

            expect(employee.getId()).toEqual(20);
        })
    })
    describe('getEmail',() => {
        it('method for getting email', () => {
            const employee = new Employee('jaime', 20,'jaime@email.com')

            expect(employee.getEmail()).toEqual(expect.stringContaining('jaime@email.com'));
        })
    })
    describe('getRole',() => {
        it('returns employee', () => {
            const employee = new Employee('jaime', 20,'jaime@email.com')

            expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
        })
    })
})
