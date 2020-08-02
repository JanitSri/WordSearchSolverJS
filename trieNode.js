export class TrieNode{
  
  constructor(){
    const ALPHABET_SIZE = 26;
    this.children = new Array(ALPHABET_SIZE).fill(null);
    this.endOfWord = false;
    this.numOfChilds = 0;
  }
};

