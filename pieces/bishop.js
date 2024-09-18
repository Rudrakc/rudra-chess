import { Piece } from "../piece.js";

export class Bishop extends Piece {
    constructor(config) {
        super(config);
        this.type = 'bishop';
    }
    
    move(newPosition) {
    }
}
