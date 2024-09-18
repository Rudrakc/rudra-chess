import { Piece } from "../piece.js";

export class Knight extends Piece {
  constructor(config) {
    super(config);
    this.type = "knight";
  }

  move(newPosition) {}
}
