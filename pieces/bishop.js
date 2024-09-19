import { Piece } from "../piece.js";

export class Bishop extends Piece {
    constructor(config) {
        super(config);
        this.type = 'bishop';
    }
    
    validateMove(boardState, newPosition) {
        cosnt [row, col] = boardState.getIndex(this.position);
        const [finalRow, finalCol] = boardState.getIndex(newPosition);
        const board = boardState.board;

        if(Math.abs(row-finalRow) === Math.abs(col-finalCol)){
            for(let i = row; i<finalRow; (row < finalRow) ? i++ : i--) {
                for(let j=col ; j<finalCol; (col < finalCol) ? j++ : j--) {
                    if(i !== row && j !== col) {
                        if (board[i][j] !== null) return false;
                    }
                }
            }
            return true;
        }
        return false;
    }
}
