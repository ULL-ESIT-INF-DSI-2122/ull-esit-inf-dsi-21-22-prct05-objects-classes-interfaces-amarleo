import 'mocha';
import {expect} from 'chai';
import {Board} from '../../src/ejercicio-2/board';

describe('Board Class tests', () => {
  it('Board Constructor', () => {
    const emptyBoard = new Board(6, 7);
    expect(emptyBoard.Rows).to.be.eql(6);
    expect(emptyBoard.Columns).to.be.eql(7);
  });
});
