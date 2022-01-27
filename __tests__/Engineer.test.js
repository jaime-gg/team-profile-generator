const { expect } = require('@jest/globals')
const Engineer = require('../lib/Engineer.js') 

describe('Engineer',() => {
    describe('generating the engineer class',() => {
        it('construct an engineer object', () => {
            // emplyee normally contains name, id, email
            // should append github at the end of new Engineer
            const engineer = new Engineer('Jaime', 20, 'jaime@gmail.com', 'jaime-gg');

            expect(engineer.github).toEqual(expect.any(String));
        })
    })
    describe('getGithub method',() => {
        it('method for getting the github value', () => {
            const engineer = new Engineer('Jaime', 20, 'jaime@gmail.com', 'jaime-gg');

            // check the getGithub() method from the engineer class
            expect(engineer.getGithub()).toEqual('jaime-gg')
        })
    })
    describe('getRole',() => {
        it('returns engineer', () => {
            const engineer = new Engineer('Jaime', 20, 'jaime@gmail.com', 'jaime-gg');

            // check the getRole() method from the engineer class
            // it should successfully overide the original and return Engineer
            expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
        })
    })
})