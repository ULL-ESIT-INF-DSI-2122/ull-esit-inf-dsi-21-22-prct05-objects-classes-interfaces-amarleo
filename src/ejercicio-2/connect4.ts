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
}
