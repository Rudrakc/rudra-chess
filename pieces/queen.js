import { Piece } from "../piece.js";

export class Queen extends Piece {
    constructor(config) {
        super(config);
        this.type = 'queen';
    }

    move(newPosition) {
    }
}
