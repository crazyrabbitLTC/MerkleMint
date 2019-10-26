pragma solidity ^0.5.0;

import "./merkleProof/Verify.sol";
import "@openzeppelin/upgrades/contracts/Initializable.sol";
import "@openzeppelin/contracts-ethereum-package/contracts/ownership/Ownable.sol";
import "./MerkleMintCore.sol";

contract MerkleMintController is Initializable, Ownable, Verify {
    MerkleMintCore public token;
    mapping(uint256 => bytes32) public merkleRoots;

    event SeriesAdded(uint256 indexed SeriesNumber, bytes32 indexed merkleRoot);

    function initializeController(MerkleMintCore _token) public initializer {
        Ownable.initialize(msg.sender);
        token = _token;

    }

    function addMerkleRoot(uint256 _seriesNumber, bytes32 _merkleRoot) public onlyOwner {
        require(
            merkleRoots[_seriesNumber] == bytes32(0),
            "MerkleMintController::addMerkleRoot:: Series already Exists"
        );
        merkleRoots[_seriesNumber] = _merkleRoot;
        emit SeriesAdded(_seriesNumber, _merkleRoot);
    }

    function mintAsset(
        string memory _word,
        bytes32 _leaf,
        bytes32[] memory _proof,
        uint256[] memory _positions,
        uint256 tokenId,
        string memory tokenURI,
        uint256 _series
    ) public onlyOwner {
        require(
            isValidData(_word, _findRoot(_series), _leaf, _proof, _positions),
            "MerkleMintController:: Not a valid Asset"
        );
        token.mintWithTokenURI(address(this), tokenId, tokenURI);
    }

    function _findRoot(uint256 _series) internal returns (bytes32) {
        bytes32 merkleRoot = merkleRoots[_series];
        require(
            merkleRoot != bytes32(0),
            "MerkleMintController::_findRoot:: No such series exists"
        );
        return merkleRoot;
    }
}
