import { Piece } from "../piece.js";

export class Knight extends Piece {
  constructor(config) {
    super(config);
    this.type = "knight";
  }

  validateMove(boardState, newPosition) {
    cosnt [row, col] = boardState.getIndex(this.position);
    const [finalRow, finalCol] = boardState.getIndex(newPosition);
    
    const rowOffsets = [2, 2, -2, -2, 1, 1, -1, -1];
    const colOffsets = [1, -1, 1, -1, 2, -2, 2, -2];

    // Checking for all 8 possible positions
    for (let i = 0; i < rowOffsets.length; i++) {
      const newRow = row + rowOffsets[i];
      const newCol = col + colOffsets[i];

      if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
        if (newRow === finalRow && newCol === finalCol) {
          return true;
        }
      }
    }
    return false;
  }
}
