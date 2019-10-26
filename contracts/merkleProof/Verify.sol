pragma solidity ^0.5.0;
import "./MerkleProof.sol";

contract Verify is MerkleProof {
    function isValidData(
        string memory _word,
        bytes32 _root,
        bytes32 _leaf,
        bytes32[] memory _proof,
        uint256[] memory _positions
    ) public pure returns (bool) {
        if (keccak256(abi.encodePacked(_word)) == _leaf) {
            return merkleVerify(_root, _leaf, _proof, _positions);
        } else {
            return false;
        }
    }
}
