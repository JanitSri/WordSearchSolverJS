export class Board{
  constructor(ctx, canvas, cellSize, wordSearch){
    this.wordSearch = wordSearch;
    this.wordSearchRows = this.wordSearch.length;
    this.wordSearchCols = this.wordSearch[0].length;
    this.cellSize = cellSize;
    this.canvas = canvas;
    this.ctx = ctx;
    this.canvas.width = this.wordSearchCols * this.cellSize;
    this.canvas.height = this.wordSearchRows * this.cellSize;
    this.letterSize = this.cellSize * (1/2);
  }

  drawBoard() {
    for (let i = 1; i < this.wordSearchCols; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(this.cellSize*i,0);
      this.ctx.lineTo(this.cellSize*i, this.canvas.height);
      this.ctx.stroke();
    }
    
    for (let i = 1; i < this.wordSearchRows; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(0,this.cellSize*i);
      this.ctx.lineTo(this.canvas.width, this.cellSize*i);
      this.ctx.stroke();
    }
    
    this.drawLettersOnBoard();
  }
  
  drawLettersOnBoard(){
    for (let i = 0; i < this.wordSearchRows; i++) {
      for (let j = 0; j < this.wordSearchCols; j++) {
        this.drawLetter(this.wordSearch[i][j],(j*this.cellSize)+this.cellSize/2,(i*this.cellSize)+this.cellSize/2, `${this.letterSize}px Arial`);
      }
    }  
  }

  drawLetter(letter, x, y, font){
    this.ctx.font = font;
    this.ctx.textAlign="center"; 
    this.ctx.textBaseline = "middle";
    this.ctx.fillStyle = "#000000";
    this.ctx.fillText(letter, x, y);
  }

  currentLetterHover(x,y){
    this.ctx.fillStyle = "#E4F5AD";
    this.ctx.shadowColor = 'black';
    this.ctx.shadowBlur = 25;
    this.ctx.shadowOffsetX = 10;
    this.ctx.shadowOffsetY = 10;
    this.ctx.fillRect(x, y, 100, 100);
  }
}