import 'mocha';
import {expect} from 'chai';
import {Hexadecimal} from '../../src/modificacion/modificacion';

const myHexNumber = new Hexadecimal(38);

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
    })
  });
});
