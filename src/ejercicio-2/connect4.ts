import {Board} from './board';
import {Player} from './player';
const prompt = require('prompt-sync')();

export class Connect4 {
  matchBoard: Board;
  players: Player[];

  constructor(matchBoard: Board, players: Player[]) {
    this.matchBoard = matchBoard;
    this.players = players;
  }

  getMatchBoard() {
    return this.matchBoard.board;
  }

  getPlayers() {
    return this.players;
  }

  getPlayer(index: number) {
    return this.players[index];
  }

  checkWin(player: number, row: number, col: number): boolean {
    // horizontal
    let counter: number = 0;
    let fail: boolean = false;
    let rowIndex: number = 0;
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

    fail = false;
    counter = 0;
    rowIndex = row - 1;
    for (let i = col + 1; i < this.matchBoard.getColumns(); i++) {
      if ((this.getMatchBoard()[rowIndex][i] === player) && (fail === false)) {
        counter++;
      } else {
        fail = true;
      }
      if (rowIndex > 0) rowIndex--;
    }
    fail = false;
    rowIndex = row + 1;
    for (let i = col - 1; i >= 0; i--) {
      if ((this.getMatchBoard()[rowIndex][i] === player) && (fail === false)) {
        counter++;
      } else {
        fail = true;
      }
      if (rowIndex < this.matchBoard.getColumns()) rowIndex++;
    }
    if (counter >= 3) {
      return true;
    }

    return false;
  }

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
    return 'empate';
  }
}

// let player1 = new Player(1);
// let player2 = new Player(2);
// let board = new Board();
// let match = new Connect4(board, [player1, player2]);
// const newBoard: number[][] = [
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0]];
// board.setBoard(newBoard);
// match = new Connect4(board, [player1, player2]);
// console.log(match.start());

