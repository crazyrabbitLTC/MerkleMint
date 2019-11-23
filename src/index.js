"use strict"

const {keccak256, bufferToHex} = require("ethereumjs-util")
const {MerkleTree} = require("./utils/merkleTree")

class MerkleMint {
    constructor(elements) {
        this._elements = elements
        this.tree = new MerkleTree(elements)
    }

    getTree() {
        return this.tree
    }

    getElements() {
        return this._elements
    }

    getElement(x) {
        return this._elements[x]
    }

    getTotalElements() {
        return this._elements.length
    }

    getRoot() {
        return this.tree.getHexRoot()
    }

    getProofByIndex(index) {
        if (index > this._elements.length) {
            throw new Error("Index out of bounds for Elements")
        }
        return this.tree.getHexProof(this._elements[index])
    }

    getProof(el) {
        if (this._elements.includes(el)) return this.tree.getHexProof(el)
    }

    getLeafByIndex(index) {
        if (index > this._elements.length) {
            throw new Error("Index out of bounds for Elements")
        }
        return bufferToHex(keccak256(this._elements[index]))
    }

    getLeaf(el) {
        if (!this._elements.includes(el)) {
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
