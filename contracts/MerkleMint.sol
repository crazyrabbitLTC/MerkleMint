pragma solidity ^0.5.0;

import '@openzeppelin/upgrades/contracts/Initializable.sol';
import '@openzeppelin/contracts-ethereum-package/contracts/token/ERC721/StandaloneERC721.sol';
import '@openzeppelin/contracts-ethereum-package/contracts/token/ERC721/IERC721Full.sol';

contract MerkleMint is Initializable {
    StandaloneERC721 token;

    function initialize(StandaloneERC721 tokenAddress) public initializer {
        token = tokenAddress;
    }

    /**
     * @dev Returns the number of NFTs in `owner`'s account.
     */
    function balanceOf(address owner) public view returns (uint256 balance) {
        return token.balanceOf(owner);
    }

    /**
     * @dev Returns the owner of the NFT specified by `tokenId`.
     */
    function ownerOf(uint256 tokenId) public view returns (address owner) {
        return token.ownerOf(tokenId);
    }

    /**
     * @dev Transfers a specific NFT (`tokenId`) from one account (`from`) to
     * another (`to`)
     * Requirements:
     * - `from`, `to` cannot be zero.
     * - `tokenId` must be owned by `from`.
     * - If the caller is not `from`, it must be have been allowed to move this
     * NFT by either `approve` or `setApproveForAll`.
     */
    function safeTransferFrom(address from, address to, uint256 tokenId) public {
        token.safeTransferFrom(from, to, tokenId);
    }
    /**
     * @dev Transfers a specific NFT (`tokenId`) from one account (`from`) to
     * another (`to`).
     *
     * Requirements:
     * - If the caller is not `from`, it must be approved to move this NFT by
     * either `approve` or `setApproveForAll`.
     */
    function transferFrom(address from, address to, uint256 tokenId) public {
        token.transferFrom(from, to, tokenId);
    }
    function approve(address to, uint256 tokenId) public {
        token.approve(to, tokenId);
    }
    function getApproved(uint256 tokenId) public view returns (address operator) {
        return token.getApproved(tokenId);
    }

    function setApprovalForAll(address operator, bool _approved) public {
        token.setApprovalForAll(operator, _approved);
    }
    function isApprovedForAll(address owner, address operator) public view returns (bool) {
        return isApprovedForAll(owner, operator);
    }

    function safeTransferFrom(address from, address to, uint256 tokenId, bytes memory data) public {
        token.safeTransferFrom(from, to, tokenId, data);
    }

    function totalSupply() public view returns (uint256) {
        return token.totalSupply();
    }

    function tokenOfOwnerByIndex(address owner, uint256 index)
        public
        view
        returns (uint256 tokenId)
    {
        return token.tokenOfOwnerByIndex(owner, index);
    }

    function tokenByIndex(uint256 index) public view returns (uint256) {
        return token.tokenByIndex(index);
    }

    function name() external view returns (string memory) {
        return token.name();
    }
    function symbol() external view returns (string memory) {
        return token.symbol();
    }
    function tokenURI(uint256 tokenId) external view returns (string memory) {
        return token.tokenURI(tokenId);
    }

}
