import {Trie} from './trie.js';

export function move(wordSearchBoard, wordSearchBank){
  let trieStructure = new Trie();

  for(let word in wordSearchBank){
    trieStructure.insert(wordSearchBank[word]);
  }

  let wordLocations = [[],[],[]];
  for(let row = 0; row < wordSearchBoard.length; row++){
    for(let col = 0; col < wordSearchBoard[0].length; col++){
      let x = row;
      let y = col;
      let currNode = trieStructure.searchLetter(wordSearchBoard[row][col]);
      // console.log("start " + wordSearchBoard[x][y]);

      // move right 
      let rightY = y+1;
      let rightCurrNode = currNode;
      while(rightY < wordSearchBoard[0].length && rightCurrNode){
        // console.log("right " + wordSearchBoard[x][rightY]);
        rightCurrNode = trieStructure.searchLetter(wordSearchBoard[x][rightY], rightCurrNode);
        
        if(rightCurrNode && rightCurrNode.endOfWord){
          wordLocations[0].push([x,y,x,rightY]);
        }
        rightY += 1;
      }

      // move down 
      let downX = x+1;
      let downCurrNode = currNode;
      while(downX < wordSearchBoard.length && downCurrNode){
        // console.log("down " +wordSearchBoard[downX][y]);
        downCurrNode = trieStructure.searchLetter(wordSearchBoard[downX][y], downCurrNode);

        if(downCurrNode && downCurrNode.endOfWord){
          wordLocations[1].push([x,y,downX,y]);
        }

        downX += 1;
      }

      // move diagonal
      let diagY = y+1;
      let diagX = x+1;
      let diagCurrNode = currNode;
      while(diagX < wordSearchBoard.length && diagY < wordSearchBoard[0].length && diagCurrNode){
        // console.log("diagonal " +wordSearchBoard[diagX][diagY]);
        diagCurrNode = trieStructure.searchLetter(wordSearchBoard[diagX][diagY], diagCurrNode);
        
        if(diagCurrNode && diagCurrNode.endOfWord){
          wordLocations[2].push([x,y,diagX,diagY]);
        }
        
        diagX += 1;
        diagY += 1;
      }
    }
  }

  return wordLocations;
}

