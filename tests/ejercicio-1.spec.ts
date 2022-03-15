import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../src/ejercicio-1/pokemon';

const Gyarados = new Pokemon('Gyarados', 6.5, 230, 'Water', 65, 60, 110, 500);
const Chikorita = new Pokemon('Chikorita', 0.9, 6.4, 'Grass', 49, 65, 45, 45);
const Ninetales = new Pokemon('Ninetales', 1.1, 19.9, 'Fire', 76, 75, 100, 73);

describe('Pokemon class tests', () => {
  describe('Pokemon Attributes must be accessibles', () => {
    it('Example 1: Gyarados', () => {
      expect(Gyarados.name).to.be.eql('Gyarados');
      expect(Gyarados.height).to.be.eql(6.5);
      expect(Gyarados.weight).to.be.eql(230);
      expect(Gyarados.type).to.be.eql('Water');
      expect(Gyarados.attack).to.be.eql(65);
      expect(Gyarados.defense).to.be.eql(60);
      expect(Gyarados.speed).to.be.eql(110);
      expect(Gyarados.hp).to.be.eql(500);
    });
  });
  describe('Pokemon Class getters', () => {
    it('getName method', () => {
      expect(Gyarados.getName()).to.be.eql('Gyarados');
      expect(Chikorita.getName()).to.be.eql('Chikorita');
      expect(Ninetales.getName()).to.be.eql('Ninetales');
    });
  });
});
