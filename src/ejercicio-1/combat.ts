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

  start(): string {
    let firstPokemonAttack: number = 0;
    let secondPokemonAttack: number = 0;
    let firstPokemonTotalDamage: number = 0;
    let secondPokemonTotalDamage: number = 0;
    let turns: number = 1;
    let combatRecord: string = '';
    let firstPokemonHP: number = this.firstPokemon.getHp();
    let secondPokemonHP: number = this.secondPokemon.getHp();
    while (firstPokemonTotalDamage < this.secondPokemon.getHp() &&
      secondPokemonTotalDamage < this.firstPokemon.getHp()) {
      if (turns % 2 === 1) {
        firstPokemonAttack = this.pokemonDamage(
            this.firstPokemon, this.secondPokemon);
        firstPokemonTotalDamage += firstPokemonAttack;
        combatRecord += 'Turn ' + turns + ': ' + this.firstPokemon.getName() +
          ' hits ' + this.secondPokemon.getName() + ' with ' +
          firstPokemonAttack + ' points of damage -> [ ' +
          secondPokemonHP + ' - ' + firstPokemonAttack + ' = ';
        secondPokemonHP -= firstPokemonAttack;
        combatRecord += secondPokemonHP + 'HP left ]\n';
      } else {
        secondPokemonAttack = this.pokemonDamage(
            this.secondPokemon, this.firstPokemon);
        secondPokemonTotalDamage += secondPokemonAttack;
        combatRecord += 'Turn ' + turns + ': ' + this.secondPokemon.getName() +
          ' hits ' + this.firstPokemon.getName() + ' with ' +
          secondPokemonAttack + ' points of damage -> [ ' +
          firstPokemonHP + ' - ' + secondPokemonAttack + ' = ';
        firstPokemonHP -= secondPokemonAttack;
        combatRecord += firstPokemonHP + 'HP left ]\n';
      }
      turns++;
    }
    if (firstPokemonTotalDamage >= this.firstPokemon.getHp()) {
      combatRecord += this.firstPokemon.getName() + ' fainted!\n' +
        this.secondPokemon.getName() + ' Wins!';
      return combatRecord;
    } else {
      combatRecord += this.secondPokemon.getName() + ' fainted!\n' +
        this.firstPokemon.getName() + ' Wins!';
      return combatRecord;
    }
  }
}
