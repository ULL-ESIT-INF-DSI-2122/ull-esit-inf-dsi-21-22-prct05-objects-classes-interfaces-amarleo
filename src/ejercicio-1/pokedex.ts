import {Pokemon} from './pokemon';

/**
 * Pokedex Class
 */
export class Pokedex {
  pokemonList: Pokemon[];

  /**
   * Pokedex Class Constructor
   * @param pokemonList Array of Pokemon objects
   */
  constructor(pokemonList: Pokemon[] = []) {
    this.pokemonList = pokemonList;
  }
  /**
   * Pokemon array getter
   * @returns array with all known pokemon
   */
  getPokemonList() {
    return this.pokemonList;
  }
  /**
  *Pokemon Array setter
  * @param pokemonList array with all known pokemons
  */
  setPokemonList(pokemonList: Pokemon[]) {
    this.pokemonList = pokemonList;
  }
  /**
   * Pokemon Array Setter. It sets a new Pokemon on the Pokedex.
   * @param newPokemon New Pokemon object
   */
  setNewPokemon(newPokemon: Pokemon) {
    if (this.pokemonList.indexOf(newPokemon) === -1) {
      this.pokemonList.push(newPokemon);
    }
  }
}
