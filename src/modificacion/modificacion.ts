/**
 * Hexadecimal Class
 */
export class Hexadecimal {
  decimal: number;
  /**
   * Hexadecimal Class Constructor
   * @param decimal Class attribute. It is a number that is going to be
   * turn into a Hexadecimal.
   */
  constructor(decimal: number) {
    this.decimal = decimal;
  }

  /**
   * Method that transform the decimal attribute into a hexadecimal string
   * @returns A string with the new hexadecimal value
   */
  toString() {
    return '0x' + this.decimal.toString(16);
  }

  /**
   * Method that return decimal attribute
   * @returns number with decimal attrubute
   */
  valueOf() {
    return this.decimal;
  }

  /**
   * Method that adds two hexadecimal numbers
   * @param otherHex Another Hexadecimal add up
   * @returns a new Hexadecimal object with the result.
   */
  add(otherHex: Hexadecimal): Hexadecimal {
    let result: number = this.decimal + otherHex.decimal;
    return new Hexadecimal(result);
  }

  /**
   * Method that substract 2 hexadecimal numbers
   * @param otherHex Another hexadecimal number
   * @returns a new Hexadecimal object with the result
   */
  substract(otherHex: Hexadecimal): Hexadecimal {
    let result: number = this.decimal - otherHex.decimal;
    return new Hexadecimal(result);
  }

  /**
   * Method that takes a Hexadecimal String and returns its decimal value.
   * @param str string on hexadecimal notation
   * @returns Decimal Number
   */
  parse(str: string): number {
    let result: number = Number(str);
    str = result.toString(10);
    return Number(str);
  }
}
