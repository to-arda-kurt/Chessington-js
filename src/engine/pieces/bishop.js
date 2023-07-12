import Player from '..player';
import Square from '..square';
import Piece from '.piece';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let moves = []

        for( let i = 1; i=7; i++ ){
            if(location.col + i  8 && location.row + i  8){
                moves.push(Square.at(location.row+i,location.col+i))
            }

            if(location.col + i  8 && location.row - i = 0){
                moves.push(Square.at(location.row-i,location.col+i))
            }

            if(location.col - i = 0 && location.row - i = 0){
                moves.push(Square.at(location.row-i,location.col-i))
            }

            if(location.col - i = 0 && location.row + i  8){
                moves.push(Square.at(location.row+i,location.col-i))
            }
        }




        //   3,3 ++
        //  for (let i = 1; i = 7; i++) {

        //      moves.push(Square.at(location.row + i, location.col + i));

        //  }

        //   -+
        //  for (let i = 1; i = 7; i++) {

        //      moves.push(Square.at(location.row + i, location.col - i));

        //  }

        //   --
        //  for (let i = 1; i = 7; i++) {

        //      moves.push(Square.at(location.row - i, location.col - i));

        //  }

        //   +-
        //  for (let i = 1; i = 7; i++) {

        //      moves.push(Square.at(location.row - i, location.col + i));

        //  }


        return moves ;
    }
}
