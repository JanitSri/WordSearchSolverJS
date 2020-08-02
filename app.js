import {circleWord} from './circleWord.js';
import {Board} from './board.js';
import {move} from './move.js';
import {wait} from './utils.js';


var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

var wordSearch = [
  ['w','f','b','s','w'],
  ['e','i','r','e','a'],
  ['t','s','e','a','t'],
  ['w','h','a','l','e'],
  ['b','l','u','e','r']
];

var wordBank = [
  "sea",
  "fish",
  "whale",
  "water",
  "wet",
  "seal",
  "blue"
]

var wordSearchRows = wordSearch.length;
var wordSearchCols = wordSearch[0].length;

var cellSize = 100;
canvas.width = wordSearchCols * cellSize;
canvas.height = wordSearchRows * cellSize;

var letterSize = cellSize * (1/2);

var board = new Board(ctx, canvas, cellSize, wordSearch);
board.drawBoard();

var currentRow = 0;
var currentCol = 0;



ctx.lineWidth = 3;

/*
// DIAGONAL LINE --- top left to bottom right 
var startCoords = [0,0];
var endCoords = [2,2]; 
circleWord.diagonalRight(ctx, cellSize, startCoords, endCoords);

// DIAGONAL LINE --- top right to bottom left
var startCoords = [1,4];
var endCoords = [3,2]; 
circleWord.diagonalLeft(ctx, cellSize, startCoords, endCoords);

// VERTICAL LINE 
var startCoords = [0,1];
var endCoords = [4,1]; 
circleWord.vertical(ctx, cellSize, startCoords, endCoords);

// HORIZONTAL LINE 
var startCoords = [0,0];
var endCoords = [0,4]; 
circleWord.horizontal(ctx, cellSize, startCoords, endCoords);
*/

let wordSearchAnswers = move(wordSearch, wordBank);
let circleWordChoice = [circleWord.horizontal, circleWord.vertical, circleWord.diagonalRight];
let circleWordColor = ["#FF0000", "#0000FF", "#228B22"];

console.log(wordSearchAnswers);

for(let i = 0; i < wordSearchAnswers.length; i++){
  let currentCircle = circleWordChoice[i];
  ctx.strokeStyle = circleWordColor[i];
  for(let j = 0; j < wordSearchAnswers[i].length; j++){
    currentCircle(ctx, cellSize, [wordSearchAnswers[i][j][0],wordSearchAnswers[i][j][1]],[wordSearchAnswers[i][j][2],wordSearchAnswers[i][j][3]]);
  }
}

ctx.strokeStyle = "#000000";
ctx.lineWidth = 1;






























