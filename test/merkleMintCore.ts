import { expect } from "chai";
import { Signer } from "@ethersproject/abstract-signer";
import { ethers, waffle } from "hardhat";
import { utils } from "ethers";

const { deployContract } = waffle;

import { MerkleMintCore } from "../typechain/MerkleMintCore";
import { MerkleMintController } from "../typechain/MerkleMintController";
import MerkleMintCoreArtifact from "../artifacts/contracts/MerkleMintCore.sol/MerkleMintCore.json";
import MMControllerArtifact from "../artifacts/contracts/MerkleMintController.sol/MerkleMintController.json";



import { MerkleMint } from "./utils/index";

// const constants = {
//   ZERO_ADDRESS: "0x0000000000000000000000000000000000000000",
//   ZERO_BYTES32: "0x0000000000000000000000000000000000000000000000000000000000000000",
//   MAX_UINT256: ethers.BigNumber.from("2").pow(ethers.BigNumber.from("256")).sub(ethers.BigNumber.from("1")),
//   MAX_INT256: ethers.BigNumber.from("2").pow(ethers.BigNumber.from("255")).sub(ethers.BigNumber.from("1")),
//   MIN_INT256: ethers.BigNumber.from("2").pow(ethers.BigNumber.from("255")).mul(ethers.BigNumber.from("-1")),
// };

describe("MerkleMintCore", function () {

  let token: MerkleMintCore;
  let mmController: MerkleMintController;
  let signers: Signer[];

  const TokenName = "TestToken";
  const TokenSymbol = "TT";

  // Elements for merkle tree
  const elements = ["love", "anger", "hunger", "shibe"]

  // TODO: Add Types too Merkle Helper

  // Create merkletree
  const merkleMint = new MerkleMint(elements)

  // Series data
  const series = 0;
  const seriesName = "First Series";
  const ipfsHash = merkleMint.keccak256(seriesName);

  before(async function () {

    // Get Role
    const minterRole = utils.keccak256(utils.toUtf8Bytes("MINTER_ROLE"))

    // Get signers
    signers = await ethers.getSigners();

    // Array of Permissioned Addresses
    const users = [(await signers[0].getAddress())];

    // Deploy Token
    token = await deployContract(signers[0], MerkleMintCoreArtifact, [TokenName, TokenSymbol, users]) as MerkleMintCore;

    // Deploy mmController
    mmController = await deployContract(signers[0], MMControllerArtifact, [token.address, users, users]) as MerkleMintController;

    // Give mmController permissions on Token
    await token.grantRole(minterRole, mmController.address);

  });

  describe("TokenCore", async function () {
    it("Should deploy a Token", async function () {
      expect(await token.name()).to.equal(TokenName);
    });

    it("Should mint a token with uri data", async function () {
      const signers: Signer[] = await ethers.getSigners();
      const tokenURI = "First Token";
      expect(await token.mint((await signers[0].getAddress()), tokenURI)).to.emit(token, "Transfer");
      expect(await token.tokenURI(0)).to.be.equal(tokenURI);
    })
  })

  describe("MerkleMint", async function () {
    it("Should add a series", async function () {
      await expect(mmController.addSerie(merkleMint.getRoot(),
        seriesName,
        ipfsHash,
        merkleMint.getTotalElements())).to.emit(mmController, "SerieAdded");
    })

    it("Should mint a merkleMint token", async function () {

      const recepient = await signers[0].getAddress();
      const leaf = merkleMint.getLeafByIndex(0);
      const proof = merkleMint.getProofByIndex(0);
      const tokenURI = merkleMint.getElement(0);

      // const tokenURI
      await expect(mmController.mintAsset(
        recepient,
        tokenURI,
        leaf,
        proof,
        series
      )).to.emit(mmController, "MerkleMinted");
    })
  })

  it("can add additional metadata", async () => {
    const newHash = merkleMint.keccak256("The second Metadata");
    await expect(mmController.addIpfsRefToSerie(newHash, series)).to.emit(mmController, "MetadataAdded")
  })

});
