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
}
