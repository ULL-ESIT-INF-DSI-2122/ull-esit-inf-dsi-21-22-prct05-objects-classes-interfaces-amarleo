import 'mocha';
import {expect} from 'chai';
import {Connect4} from '../../src/ejercicio-2/connect4';
import {Player} from '../../src/ejercicio-2/player';
import {Board} from '../../src/ejercicio-2/board';

let player1 = new Player(1);
let player2 = new Player(2);
let board = new Board();
let match = new Connect4(board, [player1, player2]);

describe('Connect4 Class Tests', () => {
  describe('Connect4 Class Constructor', () => {
    it('2 players', () => {
      expect(match.matchBoard.board).to.be.eql([
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]]);
      expect(match.players[0]).to.be.eql(player1);
      expect(match.players[1]).to.be.eql(player2);
    });
  });
  describe('Connect4 Class getters', () => {
    it('getMatchBoard() method', () => {
      expect(match.getMatchBoard()).to.be.eql([
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]]);
    });
    it('getPlayers() method', () => {
      expect(match.getPlayers()).to.be.eql([player1, player2]);
    });
    it('getPlayer(player) method', () => {
      expect(match.getPlayer(0)).to.be.eql(player1);
      expect(match.getPlayer(1)).to.be.eql(player2);
    });
  });
  describe('checkWin method', () => {
    it('Horizontal Win', () => {
      const newBoard: number[][] = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 0, 0, 0]];
      board.setBoard(newBoard);
      match = new Connect4(board, [player1, player2]);
      expect(match.checkWin()).to.be.true;
    });
  });
});
