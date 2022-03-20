export class Player {
  token: number;

  constructor(token: number) {
    this.token = token;
  }

  getToken(): number {
    return this.token;
  }
}
