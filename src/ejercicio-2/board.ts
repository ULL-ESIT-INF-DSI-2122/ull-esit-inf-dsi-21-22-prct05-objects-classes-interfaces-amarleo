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
}
