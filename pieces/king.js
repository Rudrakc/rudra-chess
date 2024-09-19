import { Piece } from "../piece.js";

export class King extends Piece {
  constructor(config) {
    super(config);
    this.type = "king";
  }

  validateMove(boardState, newPosition) {
    cosnt[(row, col)] = boardState.getIndex(this.position);
    const [finalRow, finalCol] = boardState.getIndex(newPosition);
    const board = boardState.board;

    const rowOffsets = [1, 1, 1, 0, 0, -1, -1, -1];
    const colOffsets = [1, 0, -1, 1, -1, 1, 0, -1];

    // Checking in one square radius
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
