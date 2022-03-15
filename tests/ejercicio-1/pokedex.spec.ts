import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../../src/ejercicio-1/pokemon';
import {Pokedex} from '../../src/ejercicio-1/pokedex';

const Gyarados = new Pokemon('Gyarados', 6.5, 230, 'Water', 65, 60, 110, 500);
const Chikorita = new Pokemon('Chikorita', 0.9, 6.4, 'Grass', 49, 65, 45, 45);
const Ninetales = new Pokemon('Ninetales', 1.1, 19.9, 'Fire', 76, 75, 100, 73);
const Voltorb = new Pokemon('Voltorb', 0.5, 10.4, 'Electric', 30, 50, 100, 40);

const pokedex = new Pokedex([Gyarados, Chikorita, Ninetales]);

describe('Pokedex Class Tests', () => {
  describe('Pokedex Attributes must be accessibles', () => {
    it('Pokedex List', () => {
      expect(pokedex.pokemonList).to.be.eql([Gyarados, Chikorita, Ninetales]);
    });
    it('First Pokemon on the Pokedex name', () => {
      expect(pokedex.pokemonList[0].getName()).to.be.eql('Gyarados');
    });
  });
  describe('Pokedex getters tests', () => {
    it('getPokemonList', () => {
      expect(pokedex.getPokemonList())
          .to.be.eql([Gyarados, Chikorita, Ninetales]);
    });
  });
  describe('Pokedex setters tests', () => {
    it('setPokedexList', () => {
      const pokedexKanto = new Pokedex();
      pokedexKanto.setPokemonList([Gyarados, Ninetales]);
      expect(pokedexKanto.getPokemonList()).to.be.eql([Gyarados, Ninetales]);
    });
  });
  describe('Pokedex new pokemon add list', () => {
    it('Wild Voltorb Appeared!', () => {
      pokedex.setNewPokemon(Voltorb);
      expect(pokedex.getPokemonList())
          .to.be.eql([[Gyarados, Chikorita, Ninetales, Voltorb]]);
    });
  });
});
