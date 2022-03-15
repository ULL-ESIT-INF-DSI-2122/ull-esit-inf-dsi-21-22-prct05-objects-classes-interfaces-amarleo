import {Pokemon} from './pokemon';

export class Pokedex {
  list: Pokemon[];

  constructor(list: Pokemon[]) {
    this.list = list;
  }
}
