/**
 * Player Class
 */
export class Player {
  token: number;
  /**
   * Player constructor
   * @param token number that represents a token
   */
  constructor(token: number) {
    this.token = token;
  }
  /**
   * 
   * @returns number of the player's token
   */
  getToken(): number {
    return this.token;
  }
}
