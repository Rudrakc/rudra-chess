import { Bishop } from "./pieces/bishop.js";
import { King } from "./pieces/king.js";
import { Knight } from "./pieces/knight.js";
import { Pawn } from "./pieces/pawn.js";
import { Queen } from "./pieces/queen.js";
import { Rook } from "./pieces/rook.js";

class Board {
  constructor() {
    this.board = this.#initiateBoard();
    this.whiteKilledPieces = [];
    this.blackKilledPieces = [];
  }
  #initiateBoard() {
    let board = [];

    for (let i = 0; i < 8; i++) {
      board.push([]);
      for (let j = 0; j < 8; j++) {
        board[i].push(null);
      }
    }

    // Initiating the black pieces

    board[0][0] = new Rook({ color: "black", position: "A8" });
    board[0][7] = new Rook({ color: "black", position: "H8" });

    board[0][1] = new Knight({ color: "black", position: "B8" });
    board[0][6] = new Knight({ color: "black", position: "G8" });

    board[0][2] = new Bishop({ color: "black", position: "C8" });
    board[0][5] = new Bishop({ color: "black", position: "F8" });

    board[0][4] = new King({ color: "black", position: "E8" });
    board[0][3] = new Queen({ color: "black", position: "D8" });

    // Black Pawns
    for (let i = 0; i < 8; i++) {
      board[1][i] = new Pawn({
        color: "black",
        position: String.fromCharCode(65 + i) + "7",
      });
    }

    // Initiating the White pieces

    board[7][0] = new Rook({ color: "white", position: "A8" });
    board[7][7] = new Rook({ color: "white", position: "H8" });

    board[7][1] = new Knight({ color: "white", position: "B8" });
    board[7][6] = new Knight({ color: "white", position: "G8" });

    board[7][2] = new Bishop({ color: "white", position: "C8" });
    board[7][5] = new Bishop({ color: "white", position: "F8" });

    board[7][4] = new King({ color: "white", position: "E8" });
    board[7][3] = new Queen({ color: "white", position: "D8" });

    // White Pawns
    for (let i = 0; i < 8; i++) {
      board[6][i] = new Pawn({
        color: "white",
        position: String.fromCharCode(65 + i) + "7",
      });
    }

    return board;
  }

  printBoard() {
    const border = "  +------------------------+";
    const bottomBorder = "    a  b  c  d  e  f  g  h";
    const pieceSymbols = {
      pawn: "P",
      rook: "R",
      knight: "N",
      bishop: "B",
      queen: "Q",
      king: "K",
    };

    console.log(border);

    for (let i = 0; i < 8; i++) {
      let rowStr = `${8 - i} |`;
      for (let j = 0; j < 8; j++) {
        const piece = this.board[i][j];
        if (piece === null) {
          rowStr += " . ";
        } else {
          let symbol = pieceSymbols[piece.type];
          rowStr +=
            (piece.color === "white"
              ? " " + symbol
              : " " + symbol.toLowerCase()) + " ";
        }
      }
      rowStr += "|";
      console.log(rowStr);
    }

    console.log(border);
    console.log(bottomBorder);
  }

  resetBoard() {
    this.board = this.#initiateBoard();
  }

  #getIndex(position) {
    row = 8 - position[1];
    col = "A".charCodeAt(0) - position[0].charCodeAt(0);
    return { row, col };
  }

  getPiece(position) {
    const [row, col] = this.#getIndex(position);
    return this.board[row][col];
  }

  move(intiPosition, finalPosition) {
    const curPiece = this.getPiece(intiPosition);
    const isMoveValid = curPiece.validateMove(finalPosition);
    if (isMoveValid) {
      const targetCell = this.getPiece(finalPosition);
      const [row, col] = this.#getIndex(finalPosition);
      curPiece.position = finalPosition;
      this.board[row][col] = curPiece;
      if (targetCell !== null) {
        curPiece.color === "white"
          ? this.whiteKilledPieces.push(targetCell)
          : this.blackKilledPieces.push(targetCell);
      }
    }
  }
}
