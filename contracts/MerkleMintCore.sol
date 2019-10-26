pragma solidity ^0.5.0;

import "@openzeppelin/upgrades/contracts/Initializable.sol";
import "@openzeppelin/contracts-ethereum-package/contracts/GSN/Context.sol";
import "@openzeppelin/contracts-ethereum-package/contracts/ownership/Ownable.sol";
import "@openzeppelin/contracts-ethereum-package/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts-ethereum-package/contracts/token/ERC721/ERC721Enumerable.sol";
import "@openzeppelin/contracts-ethereum-package/contracts/token/ERC721/ERC721Metadata.sol";
import "@openzeppelin/contracts-ethereum-package/contracts/token/ERC721/ERC721MetadataMintable.sol";
import "@openzeppelin/contracts-ethereum-package/contracts/token/ERC721/ERC721Pausable.sol";
import "./Strings.sol";

contract OwnableDelegateProxy {}

contract ProxyRegistry {
    mapping(address => OwnableDelegateProxy) public proxies;
}

contract MerkleMintCore is
    Initializable,
    Ownable,
    ERC721,
    ERC721Enumerable,
    ERC721Metadata,
    ERC721MetadataMintable,
    ERC721Pausable
{
    using Strings for string;

    address proxyRegistryAddress;
    uint256 private _currentTokenId;
    string public tokenURIBase;

    function initialize(
        address[] memory minters,
        address[] memory pausers,
        address _proxyRegistryAddress
    ) public initializer {
        _currentTokenId = 0;
        Ownable.initialize(_msgSender());
        ERC721.initialize();
        ERC721Enumerable.initialize();
        ERC721Metadata.initialize("MerkleMintToken", "MMT");

        //Setup OpenSea Proxy
        proxyRegistryAddress = _proxyRegistryAddress;

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

    /**
    * @dev Mints a token to an address with a tokenURI.
    * @param _to address of the future owner of the token
    */
    function mintTo(address _to) public onlyOwner {
        uint256 newTokenId = _getNextTokenId();
        _mint(_to, newTokenId);
        _incrementTokenId();
    }

    /**
    * @dev calculates the next token ID based on value of _currentTokenId 
    * @return uint256 for the next token ID
    */
    function _getNextTokenId() private view returns (uint256) {
        return _currentTokenId.add(1);
    }

    /**
    * @dev increments the value of _currentTokenId 
    */
    function _incrementTokenId() private {
        _currentTokenId++;
    }

    function baseTokenURI() public view returns (string memory) {
        return tokenURIBase;
    }

    function changeBaseTokenURI(string memory _baseTokenURI) public onlyOwner {
        tokenURIBase = _baseTokenURI;
    }

    function tokenURI(uint256 _tokenId) external view returns (string memory) {
        return Strings.strConcat(baseTokenURI(), Strings.uint2str(_tokenId));
    }

    /**
   * Override isApprovedForAll to whitelist user's OpenSea proxy accounts to enable gas-less listings.
   */
    function isApprovedForAll(address owner, address operator) public view returns (bool) {
        // Whitelist OpenSea proxy contract for easy trading.
        ProxyRegistry proxyRegistry = ProxyRegistry(proxyRegistryAddress);
        if (address(proxyRegistry.proxies(owner)) == operator) {
            return true;
        }

        return super.isApprovedForAll(owner, operator);
    }

}
