import 'mocha';
import {expect} from 'chai';
import {Hexadecimal} from '../../src/modificacion/modificacion';

const myHexNumber = new Hexadecimal(38);

describe('Hexadecimal Class tests', () => {
  it('Hexadecimal Constructor', () => {
    expect(myHexNumber.decimal).to.be.eql(38);
  });
});
