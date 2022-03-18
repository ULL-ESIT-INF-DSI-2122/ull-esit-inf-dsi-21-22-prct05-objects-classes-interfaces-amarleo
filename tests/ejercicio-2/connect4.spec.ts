import 'mocha';
import {expect} from 'chai';
import {Connect4} from '../../src/ejercicio-2/connect4';
import {Player} from '../../src/ejercicio-2/player';
import {Board} from '../../src/ejercicio-2/board';

let player1 = new Player(1);
let player2 = new Player(2);
let board = new Board();
let match = new Connect4(board, player1, player2);

describe('Connect4 Class Tests', () => {
  describe('Connect4 Class Constructor', () => {
    it('2 players', () => {
      expect(match.board).to.be.eql([
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
});
