const {BN, constants, expectEvent, shouldFail, expectRevert} = require("openzeppelin-test-helpers");
const {
  root,
  leaf,
  badLeaf,
  proof,
  badProof,
  positions,
  badPositions,
  validWord,
  invalidWord
} = require("./utils/utils.js");
const should = require("chai").should();
const keccak256 = require("keccak256");

const MerkleMintCore = artifacts.require("MerkleMintCore");
const MerkleMintController = artifacts.require("MerkleMintController");

contract("MerkleMintController", async ([sender, secondAddress, ...otherAccounts]) => {
  let mmController;
  let mmCore;

  let tokenId = 1;
  let tokenURI = "Uri Data";
  let series = 1;
  let seriesName = "First Series";
  let ipfsHash = keccak256(seriesName);

  beforeEach(async () => {
    mmCore = await MerkleMintCore.new();
    mmController = await MerkleMintController.new();

    await mmController.initializeController(mmCore.address);
    await mmController.addMerkleRoot(series, root, seriesName, ipfsHash);
    await mmCore.initialize([mmController.address], [mmController.address]);
  });

  it("beforeEach properly deploys the contract", async () => {
    const name = await mmCore.name();
    const symbol = await mmCore.symbol();

    assert.equal(name, "MerkleMintToken");
    assert.equal(symbol, "MMT");
  });

  it("it can mint a token", async () => {
    const result = await mmController
      .mintAsset(validWord, leaf, proof, positions, tokenId, tokenURI, series, {from: sender})
    const URI = await mmCore.tokenURI(tokenId);

    assert.equal(URI, tokenURI);
  });
});
