  import Piece from "../types/Piece.ts";
import Bot from "./Bot.ts"
  class BotLogic extends Bot{
    static makeMove(board: Piece[], ownPiece: Piece): number {

        const bestMove = this.minimax(board, ownPiece).index;
        return bestMove;
      }
     
      private static minimax(board: Piece[], player: Piece, depth = 0): { score: number, index: number } {
        const availableMoves = this.getAvailableMoves(board);
    
        if (this.checkWinner(board, "x")) {
          return { score: -10 + depth, index: -1 };
        } else if (this.checkWinner(board, "o")) {
          return { score: 10 - depth, index: -1 };
        } else if (availableMoves.length === 0) {
          return { score: 0, index: -1 };
        }
    
        const moves: { score: number, index: number }[] = [];
    
        for (const move of availableMoves) {
          const newBoard = [...board];
          newBoard[move] = player;
    
          const score = this.minimax(newBoard, player === "x" ? "o" : "x", depth + 1).score;
          moves.push({ score, index: move });
        }
    
        const bestMove = this.getBestMove(moves, player === "o");
        return bestMove;
      }
    
      private static getAvailableMoves(board: Piece[]): number[] {
        return board.reduce((moves, cell, index) => (cell === "" ? [...moves, index] : moves), [] as number[]);
      }
    
      private static getBestMove(moves: { score: number, index: number }[], isMaximizing: boolean): { score: number, index: number } {
        const comparator = isMaximizing ? (a: number, b: number) => a > b : (a: number, b: number) => a < b;
    
        let bestMove = { score: isMaximizing ? -Infinity : Infinity, index: -1 };
    
        for (const move of moves) {
          if (comparator(move.score, bestMove.score)) {
            bestMove = move;
          }
        }
    
        return bestMove;
      }
    
      private static checkWinner(board: Piece[], player: Piece): boolean {
        const winningCombinations = [
          [0, 1, 2], [3, 4, 5], [6, 7, 8], 
          [0, 3, 6], [1, 4, 7], [2, 5, 8], 
          [0, 4, 8], [2, 4, 6]             
        ];
    
        for (const combination of winningCombinations) {
          const [a, b, c] = combination;
          if (board[a] === player && board[b] === player && board[c] === player) {
            return true;
          }
        }
    
        return false;
      }
      
    move(board: Piece[], ownPiece: Piece): number {
        return BotLogic.makeMove(board, ownPiece);
      }
    }
   
   
  
     
export default BotLogic;

