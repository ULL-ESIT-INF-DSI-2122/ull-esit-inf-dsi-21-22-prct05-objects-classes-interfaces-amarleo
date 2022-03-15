import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../../src/ejercicio-1/pokemon';
import {Pokedex} from '../../src/ejercicio-1/pokedex';

const Gyarados = new Pokemon('Gyarados', 6.5, 230, 'Water', 65, 60, 110, 500);
const Chikorita = new Pokemon('Chikorita', 0.9, 6.4, 'Grass', 49, 65, 45, 45);
const Ninetales = new Pokemon('Ninetales', 1.1, 19.9, 'Fire', 76, 75, 100, 73);

const pokedex = new Pokedex(Gyarados, Chikorita, Ninetales);

describe('Pokedex Class Tests', () => {
  it('Pokedex attributes must be accesibles', () => {
    expect(pokedex.list).to.be.eql([Gyarados, Chikorita, Ninetales]);
  });
});
