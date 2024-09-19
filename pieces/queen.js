import { Piece } from "../piece.js";
import { Bishop } from "./bishop.js";
import { Rook } from "./rook.js";

export class Queen extends Piece {
  constructor(config) {
    super(config);
    this.type = "queen";
  }

  validateMove(boardState, newPosition) {
    const rook = new Rook({ position: this.position });
    const bishop = new Bishop({ position: this.position });

    return (
      rook.validateMove(boardState, newPosition) ||  bishop.validateMove(boardState, newPosition)
    );
  }
}
