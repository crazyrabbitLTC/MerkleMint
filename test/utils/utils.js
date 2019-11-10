const {MerkleTree} = require('./merkleTree')
const {keccak256, bufferToHex} = require('ethereumjs-util')

const elements = ['love', 'happiness', 'ethereum']
const merkleTree = new MerkleTree(elements)

const root = merkleTree.getHexRoot()

const proof = merkleTree.getHexProof(elements[0])

const leaf = bufferToHex(keccak256(elements[0]))

const validWord = 'love'

module.exports = {
  validWord,
  root,
  leaf,
  proof,
}
