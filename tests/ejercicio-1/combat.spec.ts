import 'mocha';
import {expect} from 'chai';
import {Combat} from '../../src/ejercicio-1/combat';
import {Pokemon} from '../../src/ejercicio-1/pokemon';

const Gyarados = new Pokemon('Gyarados', 6.5, 230, 'Water', 65, 60, 110, 500);
const Chikorita = new Pokemon('Chikorita', 0.9, 6.4, 'Grass', 49, 65, 45, 45);
const Ninetales = new Pokemon('Ninetales', 1.1, 19.9, 'Fire', 76, 75, 100, 73);

const GyaradosVsNinetales = new Combat(Gyarados, Ninetales);
// const ChikoritaVsGyarados = new Combat(Chikorita, Gyarados);

describe('Combat Class tests', () => {
  it('Combat Constructor', () => {
    expect(GyaradosVsNinetales.firstPokemon).to.be.eql(Gyarados);
    expect(GyaradosVsNinetales.secondPokemon).to.be.eql(Ninetales);
  });
  describe('Combat Class methods', () => {
    it('Pokemon Combat getters', () => {
      expect(GyaradosVsNinetales.getFirstPokemon()).to.be.eql(Gyarados);
      expect(GyaradosVsNinetales.getSecondPokemon()).to.be.eql(Ninetales);
    });
  });
  describe('Pokemon Damage Function', () => {
    it('Example 1: Gyarados vs Ninetales', () => {
      expect(GyaradosVsNinetales.pokemonDamage(Gyarados, Ninetales))
          .to.be.eql(87);
    });
    it('Example 2: Chikorita vs Gyarados', () => {
      expect(GyaradosVsNinetales.pokemonDamage(Chikorita, Gyarados))
          .to.be.eql(82);
    });
  });
  describe('Pokemon Start Combat Function', () => {
    it('Example 1: Gyarados vs Ninetales', () => {
      expect(GyaradosVsNinetales.start()).to.be.eql('Gyarados Wins!');
    });
  });
});
