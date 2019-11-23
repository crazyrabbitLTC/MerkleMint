"use strict"

const {keccak256, bufferToHex} = require("ethereumjs-util")
const {MerkleTree} = require("./merkleTree")

class MerkleMint {
    constructor(elements) {
        this.elements = elements
        this.tree = new MerkleTree(elements)
    }

    getTree() {
        return this.tree
    }

    getElements() {
        return this.elements
    }

    getElement(x) {
        return this.elements[x]
    }

    getTotalElements() {
        return this.elements.length
    }

    getRoot() {
        return this.tree.getHexRoot()
    }

    getProofByIndex(index) {
        if (index > this.elements.length) {
            throw new Error("Index out of bounds for Elements")
        }
        return this.tree.getHexProof(this.elements[index])
    }

    getProof(el) {
        if (this.elements.includes(el)) return this.tree.getHexProof(el)
    }

    getLeafByIndex(index) {
        if (index > this.elements.length) {
            throw new Error("Index out of bounds for Elements")
        }
        return bufferToHex(keccak256(this.elements[index]))
    }

    getLeaf(el) {
        if (!this.elements.includes(el)) {
          throw new Error("Element not found in tree")
        }
        
        return bufferToHex(keccak256(el))
    }

    keccak256(item) {
        return keccak256(item)
    }

    bufferToHex(x) {
        return bufferToHex(x)
    }
}

module.exports = {
    MerkleMint,
}
