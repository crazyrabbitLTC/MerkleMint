const {
  BN,
  constants,
  expectEvent,
  shouldFail,
  expectRevert
} = require("openzeppelin-test-helpers");
const {
  root,
  leaf,
  badLeaf,
  proof,
  badProof,
  positions,
  badPositions
} = require("./utils/utils.js");
const keccak256 = require("keccak256");

const MerkleProof = artifacts.require("MerkleProof");

contract("MerkleProof ", async ([sender, secondAddress, ...otherAccounts]) => {
  beforeEach(async () => {
    merkleProof = await MerkleProof.new();
  });

  it("it can verify a merkle proof", async () => {
    const result = await merkleProof.merkleVerify(root, leaf, proof, positions);
    console.log("Result: ", result);
    assert.equal(result, true);
  });

  it("it rejects a merkle proof with bad data", async () => {
    const leaf = Buffer(keccak256("random"), "hex");
    const result = await merkleProof.merkleVerify(root, leaf, proof, positions);
    console.log("Result: ", result);
    assert.equal(result, false);
  });

  it("it rejects a bad merkle proof", async () => {
    const result = await merkleProof.merkleVerify(
      root,
      badLeaf,
      badProof,
      badPositions
    );
    console.log("Result: ", result);
    assert.equal(result, false);
  });
});
