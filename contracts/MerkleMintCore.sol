pragma solidity ^0.5.0;

import '@openzeppelin/upgrades/contracts/Initializable.sol';
import '@openzeppelin/contracts-ethereum-package/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts-ethereum-package/contracts/token/ERC721/ERC721Enumerable.sol';
import '@openzeppelin/contracts-ethereum-package/contracts/token/ERC721/ERC721Metadata.sol';
import '@openzeppelin/contracts-ethereum-package/contracts/token/ERC721/ERC721MetadataMintable.sol';
import '@openzeppelin/contracts-ethereum-package/contracts/token/ERC721/ERC721Pausable.sol';

/**
 * @title Complete ERC721 Non-Fungible Token Standard basic implementation with Metadata, Minting, and Pause Functionality
 * @dev see https://eips.ethereum.org/EIPS/eip-721
 * @dev Based on OpenZeppelin Contracts Ethereum Package
 * @dev see https://github.com/OpenZeppelin/openzeppelin-contracts-ethereum-package
 */
contract MerkleMintCore is
  Initializable,
  ERC721,
  ERC721Enumerable,
  ERC721Metadata,
  ERC721MetadataMintable,
  ERC721Pausable
{
  /**
     * @dev Initialize the Token Contract with Minters and Pausers. The name+symbol are hardCoded.
     * @param minters array of addresses that are allowed to mint.
     * @param pausers array of addresses that are allowed to Pause.
     */
  function initialize(
    string memory TokenName,
    string memory TokenSymbol,
    address[] memory minters,
    address[] memory pausers
  ) public initializer {
    ERC721.initialize();
    ERC721Enumerable.initialize();
    ERC721Metadata.initialize(TokenName, TokenSymbol);

    // Initialize the minter and pauser roles, and renounce them
    ERC721MetadataMintable.initialize(address(this));
    _removeMinter(address(this));

    ERC721Pausable.initialize(address(this));
    _removePauser(address(this));

    // Add the requested minters and pausers (this can be done after renouncing since
    // these are the internal calls)
    for (uint256 i = 0; i < minters.length; ++i) {
      _addMinter(minters[i]);
    }

    for (uint256 i = 0; i < pausers.length; ++i) {
      _addPauser(pausers[i]);
    }
  }

}
