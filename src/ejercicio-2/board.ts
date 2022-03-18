export class Board {
  rows: number;
  columns: number;
  board: number[][];
  constructor(rows: number = 6, columns: number = 7, board?: number[][]) {
    this.rows = rows;
    this.columns = columns;
    this.board = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]];
  }

  getRows() {
    return this.rows;
  }

  getColumns() {
    return this.columns;
  }

  setBoard(newBoard: number[][]) {
    this.board = newBoard;
  }

  printBoard(): string {
    let result: string = '';
    this.board.forEach((element: number[]) => {
      result += '[' + element + ']\n';
    });
    return result;
  }

  dropToken(pos: number, token: number): Board {
    let dropped: boolean = false;
    let i: number = this.board.length - 1;
    while (i >= 0) {
      if ((this.board[i][pos] === 0) && (dropped === false)) {
        this.board[i][pos] = token;
        dropped = true;
      }
      i--;
    }
    let newBoard = new Board(this.rows, this.columns);
    newBoard.setBoard(this.board);
    return newBoard;
  }
}
