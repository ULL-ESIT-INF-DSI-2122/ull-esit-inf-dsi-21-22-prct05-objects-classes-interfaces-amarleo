import 'mocha';
import {expect} from 'chai';
import {Player} from '../../src/ejercicio-2/player';

const player1 = new Player('■');
const player2 = new Player('Ø');

describe('Player Class tests', () => {
  describe('Player Class Constructor', () => {
    it('Player attibutes must be accessible', () => {
      expect(player1.token).to.be.eql('■');
      expect(player2.token).to.be.eql('Ø');
    });
  });
});
