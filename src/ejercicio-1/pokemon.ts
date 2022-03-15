type PokemonType = 'Water' | 'Fire' | 'Grass' | 'Electric';

export class Pokemon {
  name: string;
  height: number;
  weight: number;
  type: PokemonType;
  attack: number;
  defense: number;
  speed: number;
  hp: number;

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

  getName() {
    return this.name;
  }
}
