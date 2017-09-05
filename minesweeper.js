document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
/* var board = {
    cells : [
        {hidden: true, row: 0, col: 0, isMine: false, isMarked: false, surroundingMines: 0}, //1
        {hidden: true, row: 1, col: 0, isMine: false, isMarked: false, surroundingMines: 0}, //2
        {hidden: true, row: 2, col: 0, isMine: false, isMarked: false, surroundingMines: 1}, //3
        {hidden: true, row: 3, col: 0, isMine: true, isMarked: true, surroundingMines: 0}, //4
        {hidden: true, row: 0, col: 1, isMine: false, isMarked: false, surroundingMines: 1}, //5
        {hidden: true, row: 1, col: 1, isMine: false, isMarked: false, surroundingMines: 1}, //6
        {hidden: true, row: 2, col: 1, isMine: false, isMarked: false, surroundingMines: 1}, //7
        {hidden: true, row: 3, col: 1, isMine: false, isMarked: false, surroundingMines: 1}, //8
        {hidden: true, row: 0, col: 2, isMine: true, isMarked: true, surroundingMines: 0}, //9
        {hidden: true, row: 1, col: 2, isMine: false, isMarked: false, surroundingMines: 2}, //10
        {hidden: true, row: 2, col: 2, isMine: false, isMarked: false, surroundingMines: 1}, //11
        {hidden: true, row: 3, col: 2, isMine: false, isMarked: false, surroundingMines: 0}, //12
        {hidden: true, row: 0, col: 3, isMine: false, isMarked: false, surroundingMines: 2}, //13
        {hidden: true, row: 1, col: 3, isMine: true, isMarked: true, surroundingMines: 0}, //14
        {hidden: true, row: 2, col: 3, isMine: false, isMarked: false, surroundingMines: 1}, //15
        {hidden: true, row: 3, col: 3, isMine: false, isMarked: false, surroundingMines: 0} //16
    ]
}; */

var board = { cells: [] }
var boardSize = board.cells;

function loadBoard(size){
  //EJS: To work with two dimensions, you will need a loop inside of a loop.
  for (var X = 0; X < size; X++ ){
    for (var Y = 0; Y < size; Y++){
      var generate = {
        row: X,
        col: Y,
        isMine: Math.floor(Math.random() > 0.9),
        isMarked: false,
        hidden: true,
      }
      //Previously using board.cells.push() don't work.
      boardSize.push(generate);
    }
  }
}
loadBoard(5);

/* 4x4 should print out:
 1 | 5  | 9  | 13
-- * -- * -- * --
 2 | 6  | 10 | 14
-- * -- * -- * --
 3 | 7  | 11 | 15
-- * -- * -- * --
 4 | 8  | 12 | 16  */



function startGame () {
  // Don't remove this function call: it makes the game work!
  document.addEventListener('click', checkForWin);
  document.addEventListener('mousedown', checkForWin);

    for (var i = 0; i < boardSize.length; i++){
        boardSize[i].surroundingMines = countSurroundingMines(boardSize[i]);
    }

  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
    for (var j = 0; j < boardSize.length; i++){
        if ((boardSize[j].isMine) && (boardSize[j].hidden) === true){
        } else if ((boardSize[j].isMine) && (boardSize[j].isMarked) === true){
        } else {
            return;
        }
    }
    lib.displayMessage('You win!');

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

function countSurroundingMines (cell) {

    var surroundingCells = lib.getSurroundingCells(cell.row, cell.col);

    var count = 0;

    for (var i = 0; i < surroundingCells.length; i++){
        if (surroundingCells[i].isMine){
            count ++;
        }
    }
    return count;
}
