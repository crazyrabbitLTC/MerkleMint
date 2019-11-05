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

  let tokenName = "MerkleMintToken";
  let tokenSymbol = "MMT";

  let tokenId = 1;
  let tokenURI = "Uri Data";
  let series = 1;
  let seriesName = "First Series";
  let ipfsHash = keccak256(seriesName);

  beforeEach(async () => {
    mmCore = await MerkleMintCore.new();
    mmController = await MerkleMintController.new();

    await mmController.initializeController(mmCore.address);
    await mmController.addSerie(series, root, seriesName, ipfsHash);
    await mmCore.initialize(tokenName, tokenSymbol, [mmController.address], [mmController.address]);
  });

  it("beforeEach properly deploys the contract", async () => {
    const name = await mmCore.name();
    const symbol = await mmCore.symbol();

    assert.equal(name, tokenName);
    assert.equal(symbol, tokenSymbol);
  });

  it("it can mint a token", async () => {
    const result = await mmController.mintAsset(
      validWord,
      leaf,
      proof,
      positions,
      tokenId,
      tokenURI,
      series,
      {from: sender}
    );
    const URI = await mmCore.tokenURI(tokenId);

    assert.equal(URI, tokenURI);
  });

  it("it can add additional IPFSHash", async () => {
    const newHash = keccak256("The second Thing");
    const receipt = await mmController.addIpfsRefToSerie(newHash, 1, {from: sender});

    expectEvent(receipt, "IPFSHashAdded", {SerieNumber: new BN(1)});
  });
});
