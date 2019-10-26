const EthCrypto = require("eth-crypto");
const web3Utils = require("web3-utils");
const {MerkleTree} = require("merkletreejs");
const keccak256 = require("keccak256");
const buf2hex = x => "0x" + x.toString("hex");

const signWord = async (word, privateKey) => {
  try {
    const message = EthCrypto.hash.keccak256([{type: "string", value: word}]);
    const signature = await EthCrypto.sign(privateKey, message);
    return signature;
  } catch (error) {
    console.log(error);
  }
};

const leaves = ["love", "happiness", "ethereum"].map(x => keccak256(x), "hex");

const badLeaves = ["love", "emotion", "ethereum"].map(x => keccak256(x), "hex");

const tree = new MerkleTree(leaves, keccak256);
const badTree = new MerkleTree(badLeaves, keccak256);

const root = Buffer(tree.getRoot(), "hex");

const leaf = Buffer(keccak256("love"), "hex");
const badLeaf = Buffer(keccak256("emotion"), "hex");

const proof = tree.getProof(leaf).map(x => buf2hex(x.data));
const badProof = tree.getProof(badLeaf).map(x => buf2hex(x.data));

const positions = tree
  .getProof(leaf)
  .map(x => (x.position === "right" ? 1 : 0));

const badPositions = badTree
  .getProof(badLeaf)
  .map(x => (x.position === "right" ? 1 : 0));

const validWord = "love";
const invalidWord = "diabolical";

module.exports = {
  validWord,
  invalidWord,
  signWord,
  leaves,
  badLeaves,
  tree,
  badTree,
  root,
  leaf,
  badLeaf,
  proof,
  badProof,
  positions,
  badPositions
};
