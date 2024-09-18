import { Piece } from "../piece.js";

export class Rook extends Piece {
  constructor(config) {
    super(config);
    this.type = "rook";
  }

  move(newPosition) {}
}
