import { expect } from "chai";
import { Signer } from "@ethersproject/abstract-signer";
import { ethers } from "hardhat";

import { MerkleMintCore } from "../../typechain/MerkleMintCore";

export function MerkleMintCoreBehavior(token: MerkleMintCore, TokenName: string, TokenSymbol: string): void{
    it("Should deploy a MerkleMintCore", async function () {
      expect(await token.name()).to.equal(TokenName);
    });

    it("Should mint a token with uri data", async function () {
      const signers: Signer[] = await ethers.getSigners();
      const tokenURI = "First Token";
      expect(await token.mint((await signers[0].getAddress()), tokenURI)).to.emit(token, "Transfer");
      expect(await token.tokenURI(0)).to.be.equal(tokenURI);
    })

};
