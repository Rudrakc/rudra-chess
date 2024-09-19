import { Piece } from "../piece.js";

export class Bishop extends Piece {
  constructor(config) {
    super(config);
    this.type = "bishop";
  }

  validateMove(boardState, newPosition) {
    const [row, col] = boardState.getIndex(this.position); 
    const [finalRow, finalCol] = boardState.getIndex(newPosition);
    const board = boardState.board;

    //Diagonal Move
    if (Math.abs(row - finalRow) === Math.abs(col - finalCol)) {
      let rowStep = finalRow > row ? 1 : -1;
      let colStep = finalCol > col ? 1 : -1;

      let currentRow = row + rowStep;
      let currentCol = col + colStep;

      // Checking if path is clear or not 
      while (currentRow !== finalRow && currentCol !== finalCol) {
        if (board[currentRow][currentCol] !== null) {
          return false;
        }
        currentRow += rowStep;
        currentCol += colStep;
      }
      return true;
    }
    return false;
  }
}
