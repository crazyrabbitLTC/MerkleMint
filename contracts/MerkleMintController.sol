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
        uint256 indexed SerieNumber,
        bytes32 IPFSHash,
        bytes32 indexed merkleRoot,
        string SeriesName
    );
    event IPFSHashAdded(uint256 indexed SerieNumber, bytes32 IPFSHash);

    function initializeController(MerkleMintCore _token) public initializer {
        Ownable.initialize(msg.sender);
        token = _token;

    }

    function addMerkleRoot(
        uint256 _serieNumber,
        bytes32 _merkleRoot,
        string memory _seriesName,
        bytes32 _ipfsHash
    ) public onlyOwner {
        require(
            series[_serieNumber].seriesID == 0,
            "MerkleMintController::addMerkleRoot:: Series already Exists"
        );

        Serie memory serie;
        serie.merkleRoot = _merkleRoot;
        serie.seriesID = _serieNumber;
        serie.serieName = _seriesName;

        series[_serieNumber] = serie;
        series[_serieNumber].ipfsHash.push(_ipfsHash);
        emit SeriesAdded(_serieNumber, _ipfsHash, _merkleRoot, _seriesName);
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

    function _findRoot(uint256 _series) internal view returns (bytes32) {
        bytes32 merkleRoot = series[_series].merkleRoot;
        require(
            merkleRoot != bytes32(0),
            "MerkleMintController::_findRoot:: No such series exists"
        );
        return merkleRoot;
    }

    function addIpfsRefToSerie(bytes32 _ipfsHash, uint256 _serieNumber) public onlyOwner {
        require(
            series[_serieNumber].seriesID == _serieNumber,
            "MerkleMintController::addIpfsRefToSerie:: Serie does not Exist"
        );

        series[_serieNumber].ipfsHash.push(_ipfsHash);
        emit IPFSHashAdded(_serieNumber, _ipfsHash);
    }
}
