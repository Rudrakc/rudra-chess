import { Piece } from "../piece.js";

export class Pawn extends Piece {
  constructor(config) {
    super(config);
    this.type = "pawn";
  }

  move(newPosition) {
    
  }
}
