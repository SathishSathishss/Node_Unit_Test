const { expect } = require ('chai');
const { add } = require('./math');
const { describe } = require('mocha');


describe('Math Module' ,() => {
    describe('add',() =>{
        it('should add two number correctly', () => {

           const result = add(b,3);
           expect(result).to.equal(5);
        });
        
        it('should theow an error for invalid inpiut', () =>{
            expect(() => add('a',3)).to.throw('child "a" fails becase["a" must be a number]')
        });
    });
});