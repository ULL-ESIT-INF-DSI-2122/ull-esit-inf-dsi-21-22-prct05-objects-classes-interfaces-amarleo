export class Board {
  rows: number;
  columns: number;
  board: number[][];
  constructor(rows: number = 6, columns: number = 7) {
    this.rows = rows;
    this.columns = columns;
    this.board = new Array(rows).fill(new Array(columns).fill(0));
  }

  getRows() {
    return this.rows;
  }

  getColumns() {
    return this.columns;
  }

  printBoard(): string {
    let result: string = '';
    this.board.forEach((element: number[]) => {
      result += '[' + element + ']\n';
    });
    return result;
  }

  dropToken(pos: number, token: number): number[][] {
    for (let i = this.rows - 1; i > 0; i--) {
      if (this.board[i][pos] != 0) {
        this.board[i][pos] = token;
      } else {
        console.log('FILA FULL');
      }
    }
    return this.board;
  }
}
