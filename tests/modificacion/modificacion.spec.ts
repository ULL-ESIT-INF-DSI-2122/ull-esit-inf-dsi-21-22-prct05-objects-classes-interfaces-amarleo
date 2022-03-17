import 'mocha';
import {expect} from 'chai';
import {Hexadecimal} from '../../src/modificacion/modificacion';

let myHexNumber = new Hexadecimal(38);
let myFirstHexValue = new Hexadecimal(23);
let mySecondHexValue = new Hexadecimal(15);

describe('Hexadecimal Class tests', () => {
  it('Hexadecimal Constructor', () => {
    expect(myHexNumber.decimal).to.be.eql(38);
  });
  describe('Hexadecimal methods', () => {
    it('toString() method', () => {
      expect(myHexNumber.toString()).to.be.eql('0x26');
    });
    it('valueOf method', () => {
      expect(myHexNumber.valueOf()).to.be.eql(38);
    });
    it('add method (valueOf)', () => {
      expect(myFirstHexValue.add(mySecondHexValue).valueOf()).to.be.eql(38);
    });
    it('add method (toString)', () => {
      expect(myFirstHexValue.add(mySecondHexValue).toString())
          .to.be.eql('0x26');
    });
    it('substract method (valueOf)', () => {
      expect(myFirstHexValue.substract(mySecondHexValue).valueOf())
          .to.be.eql(8);
    });
    it('substract method (valueOf)', () => {
      expect(myFirstHexValue.substract(mySecondHexValue).toString())
          .to.be.eql('0x8');
    });
    it('parse method', () => {
      expect(myFirstHexValue.parse('0x26')).to.be.eql(38);
    });
  });
});
