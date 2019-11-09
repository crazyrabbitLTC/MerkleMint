
[![Coverage Status](https://coveralls.io/repos/github/crazyrabbitLTC/MerkleMint/badge.svg?branch=master)](https://coveralls.io/github/crazyrabbitLTC/MerkleMint?branch=master)

# MerkleMint
A solution to minting non-fungible tokens for items in a) large data sets or b) data sets with large items. 

A HeritageDao Research Project: www.heritageDao.com

#QuickStart

Requirements: truffle, OpenZeppelin CLI, ganache-cli

Currently (v0.0.1) the project is designed to create a free-standing ERC-721 token (`MerkleMintCore.sol`). This contract is designed to be upgradable and used with the OpenZeppelin CLI/SDK system. However in the future I will include `truffle migrations` so that it will work with `truffle deploy` as well. 

`MerkleMintCore.sol` : This is a full featured ERC-721 token based on OpenZeppelin Contracts library. There have been no changes to the OpenZeppelin code and `MerkleMintCore.sol` if deployed will create a full featured ERC-721 token. 

`MerkleMintController.sol` : When assigned a minter-role for `MerkleMintCore.sol` this contract will mint tokens only when they have been found to exist in a registered Serie. Series are collections of counterfactually mintable tokens. Each Serie has a merkleroot saved in a `struct` which is checked against each time the contract is requested to mint a token. 

To learn how to create a suitable merkle tree, and understand how `MerkleMint` works, please see the `test` folder and inspect `MerkleMintController.js`. 

Currently `MerkleMint` is based on https://github.com/ameensol/merkle-tree-solidity but I will most likely upgrade it to OpenZeppelin's Merkle Proof library contract in the near future. 

#Installation: 

Clone the repo. 

`npm install`

The project uses OpenZeppelin CLI. 

Deploy `MerkleMintController.sol` first.

`oz create`

Select `MerkleMintController` Do not run the `initializeController` function (we will do that once we know the address of our token).

Now deploy `MerkleMintCore.sol`. Copy the address of the deployed contract, we will need it to deploy our token. 

`oz create`

Select `MerkleMintCore.sol` and when it prompts you if you wish to run a function select: `initalize`.

Use the addresses of `MerkleMintController` and any other address you with to have persmission to `mint` and `pause` the token contract, and enter them as an array at the command prompt for both `minters` and `pausers`.

For the prompts `name` and `symbol`, enter whatever you choose. Save the address returned of the `MerkleMintCore.sol` file. We will need it to link the contracts. 

Now you need to link `MerkleMintController.sol` to `MerkleMintCore.sol`. 

Run `oz send-tx`

Select the `MerkleMintController` contract and call the `initializeController` function with the address of `MerkleMintCore.sol` as the argument. 

You now have a working MerkleMint contract. To learn how to mint tokens, look at the `test` folder to see an example of how it is done for testing purposes. 

TODO: Create a useful utility for automating the merkle mint process. 




#Problem
The Heritage Dao needs to mint non-fungible tokens representing photographic assets in it's collection. Because the collection is so large, it should only be required to mint an assets token when absolutely nessesary, rather than minting all of them in advance. The idea being that the possiblity to mint an item, for an item that is not currently in use, is as good as actually having minted the item itself. 

To solve this a number of solutions were investigated, the two favorable solutions are: Signature Recovery and MerkleProofs, but both indiviuall have drawbacks. MerkleMint will show that the solution is a combination of the two techniques. 

# Signature Recovery
For Signature Recovery the Heritage Dao presigns the metadata for all the assets in it's collection. To mint an asset it is required to provide the relevant metadata details to the item (namely, the resulting off-chain location for the Asset metadata), the smart contract recovers the signature, checks that the signature is valid and then proceeds to mint the asset. 

Advantages: Ths process is fast. The Heritage Dao signs all items in the collection and makes this signature list availible publically. The collection can be infinitely large as signatures can be created on-demand, and it is trivial to generates large sets of signatures. 

Disadvantages: The smart contract appropriately limits minting to only items which are signed as authentically present in the HeritageDao Collection. The problem however is that the smart contract can not check if the signed item is actually a member of the Collection itself. This means that while the contract will disallow arbitrary minting, it does not prevent the arbitrary signing assets not inside the offical collection. This means that the vector of attack is now the private key responsible for signing data that is validated by the smart contract. 
While the Heritage Dao can make public it's entire collection and the cooresponding signatures, the public can not verify that this list is exhaustive. The public list constitutes only a subset of an infinite possible list of signed data. It is not possible for the smart contract to prove a item is not a member of the larger set, and it is not possible for the public to be confident only members of the Heritage Dao Collection can be minted. 

# MerkleProofs
Merkle Proofs allow for the creation of a Merkle Tree where we store a root on-chain and to mint and assets it is required to provide a suitable proof to the smart contract which should resolve to the correct root. 

Advantages: As the root of the Merkle Tree is dependent upon all of it's leaves, it is possible with certainty to identify all the possible members of a valid collection. This means the Heritage Dao Collection can publish in a public manner, all the assets which comprise a collection and users can know with certainty that only the assets included in this collection will properlly resolve to root stored on-chain, and thus only these assets are possible to mint. Unlike the signature recovery implementation, once the root is published on-chain, it is no longer possible for assets to be added to the collection. 

Disadvantages: For datasets with assets that are large in size, the creation of a merkle tree is computationally challanging. The Heritage Dao collection is expect to reach multiple gigabytes in the near term, terabytes in the medium term and petabytes in the long term. 

## Solution 

The creation of a MerkleTree of Signatures. (in Progress)



Thanx: @Nikesh @Fran @Palla
