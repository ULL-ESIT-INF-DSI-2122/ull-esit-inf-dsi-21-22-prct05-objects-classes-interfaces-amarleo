export class Pokemon {
  name: string;
  height: number;
  weight: number;
  type: string;
  attack: number;
  defense: number;
  speed: number;
  hp: number;

  constructor(name: string, height: number, weight: number, type: string,
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
}
