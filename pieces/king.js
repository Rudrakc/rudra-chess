import { Piece } from "../piece.js";

export class King extends Piece {
  constructor(config) {
    super(config);
    this.type = "king";
  }

  move(newPosition) {
    // Implement the move logic here
  }
}
