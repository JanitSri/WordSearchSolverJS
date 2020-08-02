export var circleWord = {
  diagonalRight: function(ctx, cellSize, startCoords, endCoords){
    ctx.beginPath();

    var rightLineXStart = cellSize*(startCoords[1]+1)-(cellSize*.45);
    var rightLineYStart = cellSize*(startCoords[0]+1)-(cellSize*.90);
    var rightLineXEnd = cellSize*(endCoords[1]+1)-(cellSize*.15);
    var rightLineYEnd = cellSize*(endCoords[0]+1)-(cellSize*.45);

    ctx.moveTo(rightLineXStart,rightLineYStart);
    ctx.lineTo(rightLineXEnd,rightLineYEnd);

    var leftLineXStart = cellSize*(startCoords[1]+1)-(cellSize*.90);
    var leftLineYStart = cellSize*(startCoords[0]+1)-(cellSize*.55);
    var leftLineXEnd = cellSize*(endCoords[1]+1)-(cellSize*.60);
    var leftLineYEnd = cellSize*(endCoords[0]+1)-(cellSize*.15);

    ctx.moveTo(leftLineXStart,leftLineYStart);
    ctx.lineTo(leftLineXEnd,leftLineYEnd);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(
      (rightLineXStart+leftLineXStart)/2,
      (rightLineYStart+leftLineYStart)/2,
      cellSize/3.5,
      0.78 * Math.PI, 
      -0.65
    );
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(
      (rightLineXEnd+leftLineXEnd)/2,
      (rightLineYEnd+leftLineYEnd)/2,
      cellSize/3.75,
      1.75 * Math.PI, 
      2.55
    );
    ctx.stroke();
  },
  diagonalLeft: function(ctx, cellSize, startCoords, endCoords){
    ctx.beginPath();

    var rightLineXStart = cellSize*(startCoords[1]+1)-(cellSize*.10);
    var rightLineYStart = cellSize*(startCoords[0]+1)-(cellSize*.55);
    var rightLineXEnd = cellSize*(endCoords[1]+1)-(cellSize*.55);
    var rightLineYEnd = cellSize*(endCoords[0]+1)-(cellSize*.15);

    ctx.moveTo(rightLineXStart,rightLineYStart);
    ctx.lineTo(rightLineXEnd,rightLineYEnd);

    var leftLineXStart = cellSize*(startCoords[1]+1)-(cellSize*.45);
    var leftLineYStart = cellSize*(startCoords[0]+1)-(cellSize*.90);
    var leftLineXEnd = cellSize*(endCoords[1]+1)-(cellSize*.90);
    var leftLineYEnd = cellSize*(endCoords[0]+1)-(cellSize*.55);

    ctx.moveTo(leftLineXStart,leftLineYStart);
    ctx.lineTo(leftLineXEnd,leftLineYEnd);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(
      (rightLineXStart+leftLineXStart)/2,
      (rightLineYStart+leftLineYStart)/2,
      cellSize/4,
      -2.35, 
      0.85
    );
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(
      (rightLineXEnd+leftLineXEnd)/2,
      (rightLineYEnd+leftLineYEnd)/2,
      cellSize/3.75,
      0.75,
      -2.30
    );
    ctx.stroke();
  }, 
  vertical: function(ctx, cellSize, startCoords, endCoords){
    ctx.beginPath();

    var rightLineXStart = cellSize*(startCoords[1]+1)-(cellSize*.20);
    var rightLineYStart = cellSize*(startCoords[0]+1)-(cellSize*.65);
    var rightLineXEnd = cellSize*(endCoords[1]+1)-(cellSize*.20);
    var rightLineYEnd = cellSize*(endCoords[0]+1)-(cellSize*.45);

    ctx.moveTo(rightLineXStart,rightLineYStart);
    ctx.lineTo(rightLineXEnd,rightLineYEnd);

    var leftLineXStart = cellSize*(startCoords[1]+1)-(cellSize*.80);
    var leftLineYStart = cellSize*(startCoords[0]+1)-(cellSize*.65);
    var leftLineXEnd = cellSize*(endCoords[1]+1)-(cellSize*.80);
    var leftLineYEnd = cellSize*(endCoords[0]+1)-(cellSize*.45);

    ctx.moveTo(leftLineXStart,leftLineYStart);
    ctx.lineTo(leftLineXEnd,leftLineYEnd);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(
      (rightLineXStart+leftLineXStart)/2,
      (rightLineYStart+leftLineYStart)/2,
      cellSize/3.4,
      3.15, 
      2 * Math.PI
    );
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(
      (rightLineXEnd+leftLineXEnd)/2,
      (rightLineYEnd+leftLineYEnd)/2,
      cellSize/3.3,
      0,
      1 * Math.PI
    );
    ctx.stroke();
  },
  horizontal:function(ctx, cellSize, startCoords, endCoords){
    ctx.beginPath();

    var topLineXStart = cellSize*(startCoords[1]+1)-(cellSize*.60);
    var topLineYStart = cellSize*(startCoords[0]+1)-(cellSize*.80);
    var topLineXEnd = cellSize*(endCoords[1]+1)-(cellSize*.40);
    var topLineYEnd = cellSize*(endCoords[0]+1)-(cellSize*.80);

    ctx.moveTo(topLineXStart,topLineYStart);
    ctx.lineTo(topLineXEnd,topLineYEnd);

    var bottomLineXStart = cellSize*(startCoords[1]+1)-(cellSize*.60);
    var bottomLineYStart = cellSize*(startCoords[0]+1)-(cellSize*.18);
    var bottomLineXEnd = cellSize*(endCoords[1]+1)-(cellSize*.40);
    var bottomLineYEnd = cellSize*(endCoords[0]+1)-(cellSize*.18);

    ctx.moveTo(bottomLineXStart,bottomLineYStart);
    ctx.lineTo(bottomLineXEnd,bottomLineYEnd);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(
      (topLineXStart+bottomLineXStart)/2,
      (topLineYStart+bottomLineYStart)/2,
      cellSize/3.3,
      1.55, 
      -1.5
    );
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(
      (topLineXEnd+bottomLineXEnd)/2,
      (topLineYEnd+bottomLineYEnd)/2,
      cellSize/3.3,
      -1.65, 
      1.6
    );
    ctx.stroke();
  }
}