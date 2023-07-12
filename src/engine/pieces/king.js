import Piece from './piece';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        return new Array(0);
    }
    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let moves = []
        let row = location.row
        let col = location.col


        const directions = [
          {row:1, col:0},
          {row:0, col:1},
          {row:-1, col:0},
          {row:0, col:-1},
          {row:1, col:1},
          {row:-1, col:1},
          {row:-1, col:-1},
          {row:1, col:-1},
        ]

        for ( let direction of directions) {
                const testSquare = Square.at(row + direction.row * i, col + direction.col * i);

                // Is square on the board

                if ( testSquare.row > 7 || testSquare.row < 0 || testSquare.col > 7 || testSquare.col < 0) {
                    break;
                }

                const piece = board.getPiece(testSquare);

                if ( piece === undefined) {
                    moves.push(testSquare);
                    continue;
                }

                if ( piece.player !== this.player ) {
                    moves.push(testSquare);
                }
                break;
            }

        
        


        return moves ;
        }
    }

