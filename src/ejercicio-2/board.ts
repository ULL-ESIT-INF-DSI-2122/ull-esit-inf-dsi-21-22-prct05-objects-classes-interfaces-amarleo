/**
 * Board Class
 */
export class Board {
  rows: number;
  columns: number;
  board: number[][];
  rowToken: number;

  /**
   * Board Class Constructor
   * @param rows number of rows
   * @param columns number of cols
   * @param board array of array of numbers with all the cells
   */
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
    this.rowToken = 0;
  }

  /**
   * getRows method
   * @returns the number of rows
   */
  getRows() {
    return this.rows;
  }
  /**
   * getColumns
   * @returns the number of cols
   */
  getColumns() {
    return this.columns;
  }

  /**
   * getRowToken
   * @returns the row where the last token was inserted
   */
  getRowToken() {
    return this.rowToken;
  }

  /**
   * setBoard
   * @param newBoard A new array of array of numbers to set
   */
  setBoard(newBoard: number[][]) {
    this.board = newBoard;
  }

  /**
   * setRowToken method
   * @param rowToken number of the new row where the last token was inserted
   */
  setRowToken(rowToken: number) {
    this.rowToken = rowToken;
  }
  /**
   * printBoard method
   * @returns string with the content of the board
   */
  printBoard(): string {
    let result: string = '';
    this.board.forEach((element: number[]) => {
      result += '[' + element + ']\n';
    });
    return result;
  }

  /**
   * dropToken method
   * @param pos position or column where the token will be inserted
   * @param token token to insert into board
   * @returns board with new token inserted
   */
  dropToken(pos: number, token: number): Board {
    let dropped: boolean = false;
    let i: number = this.board.length - 1;
    while (i >= 0) {
      if ((this.board[i][pos] === 0) && (dropped === false)) {
        this.board[i][pos] = token;
        this.setRowToken(i);
        dropped = true;
      }
      i--;
    }
    let newBoard = new Board(this.rows, this.columns);
    newBoard.setBoard(this.board);
    return newBoard;
  }
}
