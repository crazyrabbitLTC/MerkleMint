"use strict"

const {MerkleTree} = require('./merkleTree')
const {keccak256, bufferToHex} = require('ethereumjs-util')


class MM {
  constructor(elements){
    this.elements = elements;
    this.tree = new MerkleTree(elements);
    this.root = this.tree.getHexRoot();
  }

  get el(x) {
    if(x){ 
      return this.elements[x];
    } else {
    return this.elements;
    }
  }

  get elCount() {
    return this.elements.length;
  }

  get elHash() {
    return keccak256(this.elements);
  }

  get tree() {
    return this.tree;
  }

  get root() {
    return this.root;
  }

  get proofByIndex(index) {
    return this.tree.getHexRoot(this.elements[index])
  }

  get leafByIndex(index){
    return bufferToHex(keccak256(this.elements[index]))
  }

}


const elements = ['love', 'happiness', 'ethereum']
const merkleTree = new MerkleTree(elements)

const root = merkleTree.getHexRoot()

const numElements = elements.length;
const proof = merkleTree.getHexProof(elements[0])

const leaf = bufferToHex(keccak256(elements[0]))

const validWord = 'love'

module.exports = {
  validWord,
  root,
  leaf,
  proof,
  numElements
}
