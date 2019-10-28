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
} = require("../test/utils/utils");
const keccak256 = require("keccak256");

async function main() {
  let tokenId = 1;
  let tokenURI = "Uri Data";
  let series = 1;
  let seriesName = "First Series";
  let ipfsHash = keccak256(seriesName);

  const MerkleMintController = artifacts.require("MerkleMintController");
  const MerkleMintCore = artifacts.require("MerkleMintCore");

  const mmCore = await MerkleMintCore.new();
  const mmController = await MerkleMintController.new();

  await mmController.initializeController(mmCore.address);
  await mmController.addSerie(series, root, seriesName, ipfsHash);
  await mmCore.initialize([mmController.address], [mmController.address]);

  console.log(`mmCore is deployed at: ${mmCore.address}`);
  console.log(`mmController is deployed at: ${mmController.address}`);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
