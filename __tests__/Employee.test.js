const Employee = require('../lib/Employee.js') 

describe('Employee',() => {
    describe('generating the parent employee object',() => {
        it('construct an employee object'), () => {
            // contains name, id number, email
            const employee = new Employee ('jay', 20,'jay@gmail.com')

            expect(employee.name).toEqual(expect.any(String));
            expect(employee.id).toEqual(expect.any(Number));   
            expect(employee.email).toEqual(expect.any(String));               
        }
    })
    describe('getName',() => {
        it('method for getting name'), () => {

        }
    })
    describe('getId',() => {
        it('method for getting id'), () => {

        }
    })
    describe('getEmail',() => {
        it('method for getting email'), () => {

        }
    })
    describe('getRole',() => {
        it('returns employee'), () => {

        }
    })
})
