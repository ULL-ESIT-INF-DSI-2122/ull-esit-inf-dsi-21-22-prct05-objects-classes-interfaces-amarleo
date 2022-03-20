/**
 * @param PokemonType All pokemon types avaiables on this program
 */
type PokemonType = 'Water' | 'Fire' | 'Grass' | 'Electric';

/**
 * Pokemon Class
 */
export class Pokemon {
  name: string;
  height: number;
  weight: number;
  type: PokemonType;
  attack: number;
  defense: number;
  speed: number;
  hp: number;


  /**
   * Pokemon clas Constructor
   * @param name string that contains the Pokemon Name
   * @param height number that contains the Pokemon Height
   * @param weight number that contains the Pokemon Weight
   * @param type PokemonType datatype that contains n possible options
   * @param attack number that contains the Pokemon Attack Power
   * @param defense number that contains the Pokemon Defense Power
   * @param speed number that contains the Pokemon Speed
   * @param hp number that contains the Pokemon Health Points
   *
   * ```typescript
   * Pokemon('Chikorita', 0.9, 6.4, 'Grass', 49, 65, 45, 45)
   * ```
   */
  constructor(name: string, height: number, weight: number, type: PokemonType,
      attack: number, defense: number, speed: number, hp: number) {
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.type = type;
    this.attack = attack;
    this.defense = defense;
    this.speed = speed;
    this.hp = hp;
  }

  /**
   * Getter Method that returns the Pokemon object name
   * @returns string that contains the Pokemon name
   */
  getName() {
    return this.name;
  }

  /**
   * Getter method that returns the Pokemon object height
   * @returns number that contains the Pokemon height
   */
  getHeight() {
    return this.height;
  }

  /**
   * Getter method that returns the Pokemon object weight
   * @returns number that contains the Pokemon weight
   */
  getWeight() {
    return this.weight;
  }

  /**
   * Getter method that returns the Pokemon object type
   * @returns PokemonType datatype that contains the Pokemon type
   */
  getType() {
    return this.type;
  }

  /**
   * Getter method that returns the Pokemon object attack
   * @returns number that contains the Pokemon attack
   */
  getAttack() {
    return this.attack;
  }

  /**
   * Getter method that returns the Pokemon object defense
   * @returns Number that contains the Pokemon defense
   */
  getDefense() {
    return this.defense;
  }

  /**
   * Getter method that returns the Pokemon object speed
   * @returns Number that contains the Pokemon speed
   */
  getSpeed() {
    return this.speed;
  }

  /**
   * Getter method that returns the Pokemon object HP
   * @returns Number that contains the Pokemon HP
   */
  getHp() {
    return this.hp;
  }
}
