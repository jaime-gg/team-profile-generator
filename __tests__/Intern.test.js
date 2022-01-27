const Intern = require('../lib/Intern.js') 

describe('Intern',() => {
    describe('generating the intern class',() => {
        it('construct an intern object', () => {
            // normally contains name, id, email
            // should append school name at the end of new Intern
            const intern = new Intern('jaime', 20,'jaime@email.com', 'RICE')

            expect(intern.school).toEqual(expect.any(String));
        })
    })
    describe('getSchool',() => {
        it('method for getting school', () => {
            const intern = new Intern('jaime', 20,'jaime@email.com', 'RICE')

            // check the getGithub() method from the engineer class
            expect(intern.getSchool()).toEqual('RICE')
        })
    })
    describe('getRole',() => {
        it('returns intern', () => {
            const intern = new Intern('jaime', 20,'jaime@email.com', 'RICE')
            
            // check the getRole() method from the intern class
            // it should successfully overide the original and return intern
            expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
        })
    })
})