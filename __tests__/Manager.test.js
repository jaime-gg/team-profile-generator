const { expect } = require('@jest/globals')
const Manager = require('../lib/Manager.js') 

describe('Manager',() => {
    describe('generating the Manager class',() => {
        it('construct an Manager object', () => {
            // append office number to the end
            const manager = new Manager('jaime', 20,'jaime@email.com', 2001);

            expect(manager.officeNum).toEqual(2001);
        })
    })
    describe('getRole',() => {
        it('returns manager', () => {
            const manager = new Manager('jaime', 20,'jaime@email.com', 2001);

            // check the getRole() method from the manager class
            // this should hopefully be overwritten to say manager rather then employee
            expect(manager.getRole()).toEqual('Manager');
        })
    })
})