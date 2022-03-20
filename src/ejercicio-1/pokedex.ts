import {Pokemon} from './pokemon';

export class Pokedex {
  pokemonList: Pokemon[];

  constructor(pokemonList: Pokemon[] = []) {
    this.pokemonList = pokemonList;
  }

  getPokemonList() {
    return this.pokemonList;
  }

  setPokemonList(pokemonList: Pokemon[]) {
    this.pokemonList = pokemonList;
  }

  setNewPokemon(newPokemon: Pokemon) {
    if (this.pokemonList.indexOf(newPokemon) === -1) {
      this.pokemonList.push(newPokemon);
    }
  }
}
