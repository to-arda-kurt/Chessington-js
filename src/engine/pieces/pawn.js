import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let moves = [];
        let row = location.row;
        let col = location.col;
    
        const directions = [
            { row: 1, col: 0 }
        ];
    
        for (let direction of directions) {

            const testSquare = Square.at(row + direction.row, col + direction.col)
            
    
            if (testSquare.row >= 0 && testSquare.row <= 7 && testSquare.col >= 0 && testSquare.col <= 7) {
                const piece = board.getPiece(testSquare);
                const piece2 = board.getPiece(Square.at(row + 2 * direction.row, direction.col));
                const piece3 = board.getPiece(Square.at(row - 2 * direction.row, direction.col));
                //     if (piece2 === undefined) {
                //         moves.push(Square.at(row + 2 * direction.row, col));
                //         continue;
                //     }
                // }
                // break;
    
               if (this.player === Player.WHITE) {
                    if (row === 1) {
                        if (piece2 === undefined) {
                            moves.push(Square.at(row + 2 * direction.row, col));
                        }
                    }
    
                    if (piece === undefined) {
                        moves.push(Square.at(row + direction.row, col));
                    }
                } else if (this.player === Player.BLACK) {
                    if (row === 6) {
                        if (piece3 === undefined) {
                            moves.push(Square.at(row - 2 * direction.row, col));
                        }
                    }
    
                    if (piece === undefined) {
                        moves.push(Square.at(row - direction.row, col));
                    }
                }
            }
        }

        return moves;
    }
    
    
    }
    
    
    
    
    
    
    

