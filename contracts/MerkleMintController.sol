pragma solidity ^0.5.0;

import "./merkleProof/Verify.sol";
import "@openzeppelin/upgrades/contracts/Initializable.sol";
import "@openzeppelin/contracts-ethereum-package/contracts/ownership/Ownable.sol";
import "./MerkleMintCore.sol";

contract MerkleMintController is Initializable, Ownable, Verify {

  MerkleMintCore public token;
  bytes32 public merkleRoot;


function initialize(MerkleMintCore _token, bytes32 _merkleRoot) public initializer {
  token = _token;
  merkleRoot = _merkleRoot;
}

}