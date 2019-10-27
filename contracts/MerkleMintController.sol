pragma solidity ^0.5.0;

import "./merkleProof/Verify.sol";
import "@openzeppelin/upgrades/contracts/Initializable.sol";
import "@openzeppelin/contracts-ethereum-package/contracts/ownership/Ownable.sol";
import "./MerkleMintCore.sol";

contract MerkleMintController is Initializable, Ownable, Verify {
    MerkleMintCore public token;

    struct Serie {
        bytes32 merkleRoot;
        bytes32[] ipfsHash;
        string serieName;
        uint256 seriesID;
    }

    mapping(uint256 => Serie) public series;

    event SeriesAdded(
        uint256 indexed SeriesNumber,
        bytes32 IPFSHash,
        bytes32 indexed merkleRoot,
        string SeriesName
    );

    function initializeController(MerkleMintCore _token) public initializer {
        Ownable.initialize(msg.sender);
        token = _token;

    }

    function addMerkleRoot(
        uint256 _seriesNumber,
        bytes32 _merkleRoot,
        string memory _seriesName,
        bytes32 _ipfsHash
    ) public onlyOwner {
        require(
            series[_seriesNumber].seriesID == 0,
            "MerkleMintController::addMerkleRoot:: Series already Exists"
        );

        Serie memory serie;
        serie.merkleRoot = _merkleRoot;
        serie.seriesID = _seriesNumber;
        serie.serieName = _seriesName;

        series[_seriesNumber] = serie;
        series[_seriesNumber].ipfsHash.push(_ipfsHash);
        emit SeriesAdded(_seriesNumber, _ipfsHash, _merkleRoot, _seriesName);
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
        bytes32 merkleRoot = series[_series].merkleRoot;
        require(
            merkleRoot != bytes32(0),
            "MerkleMintController::_findRoot:: No such series exists"
        );
        return merkleRoot;
    }
}
