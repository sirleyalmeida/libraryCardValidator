/* eslint-disable */
const chai = require('chai');
const expect = chai.expect;
const cardValidatorTest = require('../index');

describe('Card validator', () => {
	describe('validate input', () => {
		it('input is empty', () => {
			expect(cardValidatorTest('')).to.be.false;
		});
		it('input is less than to fifiteen digits', () => {
			expect(cardValidatorTest('12345678910')).to.be.false;
		});
		it('input is bigger than to nineteen digits', () => {
			expect(cardValidatorTest('12345678910111213141516')).to.be.false;
		});
		it('input is repeated numbers', () => {
			expect(cardValidatorTest('11111111111111111111')).to.be.false;
		});
		it('input has strings type letters', () => {
			expect(cardValidatorTest('1a3d4f44444ssssss3')).to.be.false;
		});
		it('input has number type', () => {
			expect(cardValidatorTest(5367151096056004)).to.be.true;
		});
		it('input has number type and special characters', () => {
			expect(cardValidatorTest('5367-1510-9605-6004')).to.be.true;
		});
		it('input is a valid card numbers', () => {
			expect(cardValidatorTest('5367151096056004')).to.be.true;
		});
	});
});
