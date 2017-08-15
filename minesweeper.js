document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
    cells : [
        {hidden: true, row: 0, col: 0, isMine: false}, //1
        {hidden: true, row: 1, col: 0, isMine: false}, //2
        {hidden: true, row: 2, col: 0, isMine: false}, //3
        {hidden: true, row: 3, col: 0, isMine: true}, //4
        {hidden: true, row: 0, col: 1, isMine: false}, //5
        {hidden: true, row: 1, col: 1, isMine: false}, //6
        {hidden: true, row: 2, col: 1, isMine: false}, //7
        {hidden: true, row: 3, col: 1, isMine: false}, //8
        {hidden: true, row: 0, col: 2, isMine: true}, //9
        {hidden: true, row: 1, col: 2, isMine: false}, //10
        {hidden: true, row: 2, col: 2, isMine: false}, //11
        {hidden: true, row: 3, col: 2, isMine: false}, //12
        {hidden: true, row: 0, col: 3, isMine: false}, //13
        {hidden: true, row: 1, col: 3, isMine: false}, //14
        {hidden: true, row: 2, col: 3, isMine: false}, //15
        {hidden: true, row: 3, col: 3, isMine: false} //16
    ]

    /* This should print out:
     1 | 5  | 9  | 13
    -- * -- * -- * --
     2 | 6  | 10 | 14
    -- * -- * -- * --
     3 | 7  | 11 | 15
    -- * -- * -- * --
     4 | 8  | 12 | 16  */

};

function startGame () {
  // Don't remove this function call: it makes the game work!

  for (var i = 0; i < board.cells.length; i++){
      board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  }

  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.
var count = 0;
function countSurroundingMines (cell) {
    var surroundingCells = lib.getSurroundingCells(cell.row, cell.col);
    for (var i = 0; i < surroundingCells.length; i++){
        if (surroundingCells[i].isMine){
            count ++;
        }
        return count;
    }
}
