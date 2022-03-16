import 'mocha';
import {expect} from 'chai';
import {Combat} from '../../src/ejercicio-1/combat';
import {Pokemon} from '../../src/ejercicio-1/pokemon';

const Gyarados = new Pokemon('Gyarados', 6.5, 230, 'Water', 65, 60, 110, 500);
const Ninetales = new Pokemon('Ninetales', 1.1, 19.9, 'Fire', 76, 75, 100, 73);

const GyaradosVsNinetales = new Combat(Gyarados, Ninetales);

describe('Combat Class tests', () => {
  it('Combat Constructor', () => {
    expect(GyaradosVsNinetales.firstPokemon).to.be.eql(Gyarados);
    expect(GyaradosVsNinetales.secondPokemon).to.be.eql(Ninetales);
  });
});
