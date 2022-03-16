export class Board {
  rows: number;
  columns: number;

  constructor(rows: number = 6, columns: number = 7) {
    this.rows = rows;
    this.columns = columns;
  }
}
