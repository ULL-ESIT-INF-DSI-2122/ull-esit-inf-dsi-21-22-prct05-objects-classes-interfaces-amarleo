import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../../src/ejercicio-1/pokemon';

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
    it('getHeight method', () => {
      expect(Gyarados.getHeight()).to.be.eql(6.5);
      expect(Chikorita.getHeight()).to.be.eql(0.9);
      expect(Ninetales.getHeight()).to.be.eql(1.1);
    });
    it('getWeight method', () => {
      expect(Gyarados.getWeight()).to.be.eql(230);
      expect(Chikorita.getWeight()).to.be.eql(6.4);
      expect(Ninetales.getWeight()).to.be.eql(19.9);
    });
    it('getType method', () => {
      expect(Gyarados.getType()).to.be.eql('Water');
      expect(Chikorita.getType()).to.be.eql('Grass');
      expect(Ninetales.getType()).to.be.eql('Fire');
    });
    it('getAttack method', () => {
      expect(Gyarados.getAttack()).to.be.eql(65);
      expect(Chikorita.getAttack()).to.be.eql(49);
      expect(Ninetales.getAttack()).to.be.eql(76);
    });
    it('getDefense method', () => {
      expect(Gyarados.getDefense()).to.be.eql(60);
      expect(Chikorita.getDefense()).to.be.eql(65);
      expect(Ninetales.getDefense()).to.be.eql(75);
    });
    it('getSpeed method', () => {
      expect(Gyarados.getSpeed()).to.be.eql(110);
      expect(Chikorita.getSpeed()).to.be.eql(45);
      expect(Ninetales.getSpeed()).to.be.eql(100);
    });
    it('getHp method', () => {
      expect(Gyarados.getHp()).to.be.eql(500);
      expect(Chikorita.getHp()).to.be.eql(45);
      expect(Ninetales.getHp()).to.be.eql(73);
    });
  });
});
