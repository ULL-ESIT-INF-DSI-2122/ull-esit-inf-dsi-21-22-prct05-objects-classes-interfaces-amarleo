export class Hexadecimal {
  decimal: number;

  constructor(decimal: number) {
    this.decimal = decimal;
  }

  toString() {
    return '0x' + this.decimal.toString(16);
  }

  valueOf() {
    return this.decimal;
  }
}
