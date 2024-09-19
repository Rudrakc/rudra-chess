import { Piece } from "../piece.js";

export class Pawn extends Piece {
  constructor(config) {
    super(config);
    this.type = "pawn";
  }

  validateMove(boardState, newPosition) {
    const [row, col] = boardState.getIndex(this.position);
    const [finalRow, finalCol] = boardState.getIndex(newPosition);
    const board = boardState.board;

    const direction = (this.color === "white") ? -1 : 1; 
    const startRow = (this.color === "white") ? 6 : 1;  

    // 1. Normal forward move (1 square)
    if (col === finalCol && board[finalRow][finalCol] === null) {
      if (finalRow === row + direction) {
        return true;
      }
      // 2. First move (2 squares forward)
      if (row === startRow && finalRow === row + 2 * direction && board[row + direction][col] === null) {
        return true;
      }
    }

    // 3. Capture move (Diagonal)
    if (Math.abs(col - finalCol) === 1 && finalRow === row + direction) {
      if (board[finalRow][finalCol] !== null && board[finalRow][finalCol].color !== this.color) {
        return true;
      }
    }

    // Additional rules like "en passant" and promotion can be added later if needed
    return false;
  }
}
