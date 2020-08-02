import {TrieNode} from './trieNode.js';

export class Trie{
  constructor(){
    this.root = new TrieNode(); 
  }

  _getCharLocation(character){
    return character.charCodeAt(0) - "A".charCodeAt(0);
  }

  insert(word){
    let currNode = this.root;

    for(let i = 0; i < word.length; i++){
      let index = this._getCharLocation(word[i].toUpperCase());
      if(currNode.children[index] == null){
        currNode.children[index] = new TrieNode();
        currNode.numOfChilds++;
      }
      currNode = currNode.children[index];
    }
    currNode.endOfWord = true;
  }

  searchWord(word){
    return this.searchWordHelper(word, 0, this.root);
  }

  searchWordHelper(word, count, node){
    if(node == null){
      console.log(word + " does not exist");
      return false;
    }

    if(word.length == count && node.endOfWord == true){
      console.log(word + " exists");
      return true;
    }

    if(word.length == count && node.endOfWord == false){
      console.log(word + " is a prefix of an existing word");
      return true;
    }

    let index = this._getCharLocation(word[count].toUpperCase());
    if(this.searchWordHelper(word, count+1, node.children[index])){
      return true;
    }
    return false;
  }

  searchLetter(letter, node=this.root){
    if(letter == null){
      return letter;
    }
    
    let index = this._getCharLocation(letter.toUpperCase());
    if(node.children[index] == null){
      return null;
    }
    else{
      return node.children[index];
    }
  }

};