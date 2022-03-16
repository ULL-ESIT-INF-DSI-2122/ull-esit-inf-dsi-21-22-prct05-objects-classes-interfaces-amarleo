import {Pokemon} from './pokemon';

export class Combat {
  firstPokemon: Pokemon;
  secondPokemon: Pokemon;

  constructor(firstPokemon: Pokemon, secondPokemon: Pokemon) {
    this.firstPokemon = firstPokemon;
    this.secondPokemon = secondPokemon;
  }

  getFirstPokemon() {
    return this.firstPokemon;
  }

  getSecondPokemon() {
    return this.secondPokemon;
  }

  pokemonDamage(atkPokemon: Pokemon, defPokemon: Pokemon) {
    let multiplier: number = 1;
    if (atkPokemon.getType() == 'Fire') {
      if (defPokemon.getType() == 'Grass') multiplier = 2;
      if (defPokemon.getType() == 'Water') multiplier = 0.5;
    }
    if (atkPokemon.getType() == 'Water') {
      if (defPokemon.getType() == 'Grass') multiplier = 0.5;
      if (defPokemon.getType() == 'Fire') multiplier = 2;
    }
    if (atkPokemon.getType() == 'Grass') {
      if (defPokemon.getType() == 'Fire') multiplier = 0.5;
      if (defPokemon.getType() == 'Water') multiplier = 2;
    }
    if (atkPokemon.getType() == 'Electric') {
      if (defPokemon.getType() == 'Grass') multiplier = 0.5;
      if (defPokemon.getType() == 'Water') multiplier = 2;
    }
    return Math.round(
        50 * (atkPokemon.getAttack() / defPokemon.getDefense()) * multiplier);
  }
}
