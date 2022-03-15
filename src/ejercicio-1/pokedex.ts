import {Pokemon} from './pokemon';

export class Pokedex {
  pokemonList: Pokemon[];

  constructor(pokemonList: Pokemon[]) {
    this.pokemonList = pokemonList;
  }

  getPokemonList() {
    return this.pokemonList;
  }
}
