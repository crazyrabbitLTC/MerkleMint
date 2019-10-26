pragma solidity ^0.5.0;

import "./merkleProof/Verify.sol";
import "@openzeppelin/upgrades/contracts/Initializable.sol";
import "@openzeppelin/contracts-ethereum-package/contracts/ownership/Ownable.sol";
import "./MerkleMintCore.sol";

contract MerkleMintController is Initializable, Ownable, Verify {
    MerkleMintCore public token;
    bytes32 public merkleRoot;

    function initialize(MerkleMintCore _token, bytes32 _merkleRoot) public initializer {
        Ownable.initialize(msg.sender);
        token = _token;
        merkleRoot = _merkleRoot;
    }

    function mintAsset(
        string memory _word,
        bytes32 _leaf,
        bytes32[] memory _proof,
        uint256[] memory _positions,
        uint256 tokenId,
        string memory tokenURI
    ) public onlyOwner {
        require(
            isValidData(_word, merkleRoot, _leaf, _proof, _positions),
            "MerkleMintController:: Not a valid Asset"
        );
        token.mintWithTokenURI(address(this), tokenId, tokenURI);
    }

}
