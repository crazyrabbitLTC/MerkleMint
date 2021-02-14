import { keccak256, bufferToHex } from "ethereumjs-util";

import { MerkleTree } from "./merkleTree";

export class MerkleMint {

    private _elements: any;
    public tree: any;

    constructor(elements: string[]) {
        this._elements = elements
        this.tree = new MerkleTree(elements)
    }

    getTree() {
        return this.tree
    }

    getElements() {
        return this._elements
    }

    getElement(x: any) {
        return this._elements[x]
    }

    getTotalElements() {
        return this._elements.length
    }

    getRoot() {
        return this.tree.getHexRoot()
    }

    getProofByIndex(index: any) {
        if (index > this._elements.length) {
            throw new Error("Index out of bounds for Elements")
        }
        return this.tree.getHexProof(this._elements[index])
    }

    getProof(el: any) {
        if (this._elements.includes(el)) return this.tree.getHexProof(el)
    }

    getLeafByIndex(index: any) {
        if (index > this._elements.length) {
            throw new Error("Index out of bounds for Elements")
        }
        return bufferToHex(keccak256(this._elements[index]))
    }

    getLeaf(el: any) {
        if (!this._elements.includes(el)) {
            throw new Error("Element not found in tree")
        }

        return bufferToHex(keccak256(el))
    }

    keccak256(item: any) {
        return keccak256(item)
    }

    bufferToHex(x: any) {
        return bufferToHex(x)
    }
}
