import {Board} from './board';
import {Player} from './player';

export class Connect4 {
  matchBoard: Board;
  players: Player[];

  constructor(matchBoard: Board, players: Player[]) {
    this.matchBoard = matchBoard;
    this.players = players;
  }
}
