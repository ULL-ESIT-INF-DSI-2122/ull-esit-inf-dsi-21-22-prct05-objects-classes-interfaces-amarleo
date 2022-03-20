import {Board} from './board';
import {Player} from './player';
const prompt = require('prompt-sync')();

/**
 * Connect 4 class
 */
export class Connect4 {
  matchBoard: Board;
  players: Player[];

  /**
   * Connect 4 constructor
   * @param matchBoard object (board)
   * @param players array of players
   */
  constructor(matchBoard: Board, players: Player[]) {
    this.matchBoard = matchBoard;
    this.players = players;
  }
  /**
   * getter matchboard
   * @returns board object
   */
  getMatchBoard() {
    return this.matchBoard.board;
  }
  /**
   * getter players
   * @returns returns the array with all players
   */
  getPlayers() {
    return this.players;
  }
  /**
  * getter player
  * @param index number of the player array elemetn
  * @returns a player object
  */
  getPlayer(index: number) {
    return this.players[index];
  }
  /**
   * checkWin method
   * @param player number of the token
   * @param row row to check
   * @param col col to check
   * @returns true if it is a win solution, false if is not
   */
  checkWin(player: number, row: number, col: number): boolean {
    // horizontal
    let counter: number = 0;
    let fail: boolean = false;
    // let rowIndex: number = 0;
    for (let i = col + 1; i < this.getMatchBoard().length; i++) {
      if ((this.getMatchBoard()[row][i] === player) && (fail === false)) {
        counter++;
      } else {
        fail = true;
      }
    }
    fail = false;
    for (let i = col - 1; i >= 0; i--) {
      if ((this.getMatchBoard()[row][i] === player) && (fail === false)) {
        counter++;
      } else {
        fail = true;
      }
    }
    if (counter >= 3) {
      return true;
    }
    // vertical
    fail = false;
    counter = 0;
    for (let i = row + 1; i < this.matchBoard.getRows(); i++) {
      if ((this.getMatchBoard()[i][col] === player) && (fail === false)) {
        counter++;
      } else {
        fail = true;
      }
    }
    fail = false;
    for (let i = row - 1; i >= 0; i--) {
      if ((this.getMatchBoard()[i][col] === player) && (fail === false)) {
        counter++;
      } else {
        fail = true;
      }
    }
    if (counter >= 3) {
      return true;
    }
    // Diagonal 1

    // fail = false;
    // counter = 0;
    // rowIndex = row - 1;
    // if (row >= 1) rowIndex = row - 1;
    // else {
    // rowIndex = row;
    // }
    // for (let i = col + 1; i < this.matchBoard.getColumns(); i++) {
    // if ((this.getMatchBoard()[rowIndex][i] === player) && (fail === false)) {
    // counter++;
    // } else {
    // fail = true;
    // }
    // console.log(rowIndex);
    // if (rowIndex > 0) rowIndex--;
    // }
    // fail = false;
    // if (this.matchBoard.getRows() - row > 1) rowIndex = row + 1;
    // else {
    // rowIndex = row;
    // }
    // for (let i = col - 1; i >= 0; i--) {
    // console.log(rowIndex);
    // if ((this.getMatchBoard()[rowIndex][i] === player) && (fail === false)) {
    // counter++;
    // } else {
    // fail = true;
    // }
    // if (rowIndex < this.matchBoard.getColumns()) rowIndex++;
    // }
    // if (counter >= 3) {
    // return true;
    // }

    return false;
  }
  /**
   * start method
   * @returns string with the winner
   */
  start() :string {
    let win: boolean = false;
    let col: number = 0;
    let turn: number = 1;
    while (!win) {
      if (turn % 2 === 1) {
        console.log('Player 1 turn\n');
        col = prompt('Type the selected col\n');
        this.matchBoard.dropToken(col, this.players[0].getToken());
        console.log(this.matchBoard.printBoard());
        console.log(this.matchBoard.getRowToken());
        if (this.checkWin(
            this.players[0].getToken(), this.matchBoard.getRowToken(), col) ===
            true) {
          win = true;
          return 'Player 1 won!';
        }
      } else if ((turn % 2 === 0) && win === false) {
        console.log('Player 2 turn\n');
        col = prompt('Type the selected col\n');
        this.matchBoard.dropToken(col, this.players[1].getToken());
        console.log(this.matchBoard.printBoard());
        console.log(this.checkWin(
            this.players[1].getToken(), this.matchBoard.getRowToken(), col));
        if (this.checkWin(
            this.players[1].getToken(), this.matchBoard.getRowToken(), col) ===
             true) {
          win = true;
          return 'Player 2 won!';
        }
      }
      turn++;
    }
    return 'Error';
  }
}

// let player1 = new Player(1);
// let player2 = new Player(2);
// let board = new Board();
// let match = new Connect4(board, [player1, player2]);
// const newBoard: number[][] = [
// [0, 0, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0, 0]];
// board.setBoard(newBoard);
// match = new Connect4(board, [player1, player2]);
// console.log(match.start());

