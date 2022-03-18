import 'mocha';
import {expect} from 'chai';
import {Player} from '../../src/ejercicio-2/player';

const player1 = new Player(1);
const player2 = new Player(2);

describe('Player Class tests', () => {
  describe('Player Class Constructor', () => {
    it('Player attibutes must be accessible', () => {
      expect(player1.token).to.be.eql(1);
      expect(player2.token).to.be.eql(2);
    });
  });
  describe('Player Class Methods', () => {
    it('getToken method', () => {
      expect(player1.getToken()).to.be.eql(1);
      expect(player2.getToken()).to.be.eql(2);
    });
  });
});
