import {Board} from './board';
import {Player} from './player';

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
    if (counter === 3) {
      return true;
    }
    return false;
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
//   [0, 1, 0, 0, 0, 0, 0],
//   [1, 1, 1, 1, 0, 0, 0]];
// board.setBoard(newBoard);
// match = new Connect4(board, [player1, player2]);

// console.log(match.checkWin(player1.getToken(), 5, 2));
