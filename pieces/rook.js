import { Piece } from "../piece.js";

export class Rook extends Piece {
  constructor(config) {
    super(config);
    this.type = "rook";
  }

  validateMove(boardState, newPosition) {
    cosnt [row, col] = boardState.getIndex(this.position);
    const [finalRow, finalCol] = boardState.getIndex(newPosition);
    const board = boardState.board;
    let ans = true;
    if(row === finalRow){
      let initIdx = (finalCol > col) ? col+1 : finalCol+1;
      let endIdx = (finalCol > col) ? finalCol : col;

      for(let i = initIdx ; i < endIdx; i++) {
        if(board[row][i] !== null) ans = false; 
      }
    }
    else if(col === finalCol){
      let initIdx = (finalRow > row) ? row+1 : finalRow+1;
      let endIdx = (finalRow > row) ? finalRow : row;

      for(let i = initIdx ; i < endIdx; i++) {
        if(board[i][col] !== null) ans = false; 
      }
    }
    else ans = false;

    return ans;
    
  }
}
