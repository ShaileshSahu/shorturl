const chai = require("chai");
const expect = chai.expect;
const {randomGenerator} = require("../../utility/generator");
describe("Test suite for utility", ()=>{
    it("Validate random generator invalid length", () => {
            const result = randomGenerator();
            expect(result).to.be.instanceOf(TypeError)
    });

    it("Validate random generator length", () => {
        const result = randomGenerator(12);
        expect(result.length).to.be.equal(12);
    });
})