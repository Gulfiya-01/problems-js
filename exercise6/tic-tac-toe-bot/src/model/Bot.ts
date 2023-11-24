import Player from "./Player";
import Piece from "../types/Piece.ts";
import BotLogic from "./BotLogic.ts";
class Bot extends Player {
  constructor(name: string, avatarUrl: string) {
    super(name, avatarUrl);
  };

  move(board: Piece[], ownPiece: Piece) {
    console.log(board, ownPiece);
    const selectedMove = BotLogic.makeMove(board, ownPiece);
    return selectedMove;
  }
}


export default Bot;
