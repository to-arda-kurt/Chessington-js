import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let moves = []

        let row = location.row;
        let col = location.col;



        const directionsWhite = [
            {row:1, col:0},
          ]
        
        const directionsBlack = [
            {row:-1, col:0},
        ]


        // const piece = board.getPiece(testSquare);


        if (this.player === Player.WHITE) {

            let testSquare = Square.at(row + directionsWhite.row, col);

            const piece = board.getPiece(testSquare);

            if(row === 1 && piece === undefined ) {
                moves.push(Square.at(row +2 , col)) 
            } 

            if(piece === undefined){
                moves.push(Square.at(row + directionsWhite.row, col)) 
                
            }
         
            
        } 

        if (this.player === Player.BLACK) {

            let testSquare = Square.at(row + directionsBlack.row, col);

            const piece = board.getPiece(testSquare);

            if(row === 1 && piece === undefined ) {
                moves.push(Square.at(row -2 , col)) 
            } 

            if(piece === undefined){
                moves.push(Square.at(row + directionsWhite.row, col)) 
                
            }
         
            
        } 

        return moves;
    }
}
