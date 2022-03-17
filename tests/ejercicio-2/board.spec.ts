import 'mocha';
import {expect} from 'chai';
import {Board} from '../../src/ejercicio-2/board';

const emptyBoard = new Board(6, 7);
const defaultBoard = new Board();

describe('Board Class tests', () => {
  describe('Constructor values tests', () => {
    it('Board Constructor', () => {
      expect(emptyBoard.rows).to.be.eql(6);
      expect(emptyBoard.columns).to.be.eql(7);
      expect(emptyBoard.board)
          .to.be.eql([
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0]]);
    });
    it('Board Constructor Default values', () => {
      expect(defaultBoard.rows).to.be.eql(6);
      expect(defaultBoard.columns).to.be.eql(7);
      expect(defaultBoard.board)
          .to.be.eql([
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0]]);
    });
  });
  describe('Board getters', () => {
    it('getRows method', () => {
      expect(defaultBoard.getRows()).to.be.eql(6);
    });
    it('getColumns method', () => {
      expect(defaultBoard.getColumns()).to.be.eql(7);
    });
  });
  describe('Board methods', () => {
    it('print board method', () => {
      expect(defaultBoard.printBoard()).to.be.eql(
          '[[0, 0, 0, 0, 0, 0, 0],' +
          '[0, 0, 0, 0, 0, 0, 0],' +
          '[0, 0, 0, 0, 0, 0, 0],' +
          '[0, 0, 0, 0, 0, 0, 0],' +
          '[0, 0, 0, 0, 0, 0, 0],' +
          '[0, 0, 0, 0, 0, 0, 0]]');
    });
  });
});
