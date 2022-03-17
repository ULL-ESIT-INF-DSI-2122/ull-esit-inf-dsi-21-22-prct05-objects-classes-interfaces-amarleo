export class Hexadecimal {
  decimal: number;
  hexadecimal: string;

  constructor(decimal: number) {
    this.decimal = decimal;
    this.hexadecimal = decimal.toString(16);
  }

  toString() {
    return '0x' + this.hexadecimal;
  }

  valueOf() {
    return this.decimal;
  }

  add(otherHex: Hexadecimal): Hexadecimal {
    let result: number = this.decimal + otherHex.decimal;
    return new Hexadecimal(result);
  }

  substract(otherHex: Hexadecimal): Hexadecimal {
    let result: number = this.decimal - otherHex.decimal;
    return new Hexadecimal(result);
  }
}
