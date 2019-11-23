
[![Coverage Status](https://coveralls.io/repos/github/crazyrabbitLTC/MerkleMint/badge.svg?branch=master)](https://coveralls.io/github/crazyrabbitLTC/MerkleMint?branch=master)

Note: WebFlow integration has been removed to focus on the core functionality. It can still be found in the branch `webFlow`

# MerkleMint
Counterfactual ERC721 Token Minting. 

### What is it?

A nice primer on using [counterfactual](https://medium.com/statechannels/counterfactual-generalized-state-channels-on-ethereum-d38a36d25fc6) *things* in Ethereum. 

MerkleMint allows for counterfactual minting of NFT tokens. In a nutshell, by storing the root of a merkle tree on-chain, you can prove that you have a set of elements that *could* be minted on-chain if they were needed, but until they are needed, no sense in minting them. 

Example: Lets say you Beyonce has tour coming up and she wants to use ERC721's as tickets. Lets say she expects 1 million people to attend her tour. If she were to mint each NFT Token at the start, she would be spending an enormous amount of money on gas minting all 1 million tokens. With MerkleMint however, she needs only to store the root of a merkle tree on-chain, then as each fan purchases a ticket (her fan can even pay the gas for minting!), the NFT can be minted on demand. 

The beauty of using a merkle tree is that there are no scalpers: You can prove there are 1 million possible tickets, without minting them. You also can't mint a fake ticket- only the tickets within the merkle tree will be accepted as valid. You can also share the entire list of tickets before hand- by building a merkle tree out of signatures, the tree can be public, without exposing any information about individual tickets. 

Merkle Mint can be used for a wide range of situations for which NFT tokens are desired, but are not performant to mint at the outset. They can be used to represent enormous collections of items on-chain with minimal gas costs. 




A HeritageDao Research Project: www.heritageDao.com

# QuickStart

Requirements: OpenZeppelin CLI, ganache-cli

Currently (v0.0.4) the project is designed to create a free-standing ERC-721 token (`MerkleMintCore.sol`). This contract is designed to be upgradable and used with the OpenZeppelin CLI/SDK system. However in the future I will include `truffle migrations` so that it will work with `truffle deploy` as well. 

`MerkleMintCore.sol` : This is a full featured ERC-721 token based on OpenZeppelin Contracts library. There have been no changes to the OpenZeppelin code and `MerkleMintCore.sol` if deployed will create a full featured ERC-721 token. 

`MerkleMintController.sol` : When assigned a minter-role for `MerkleMintCore.sol` this contract will mint tokens only when they have been found to exist in a registered Serie. Series are collections of counterfactually mintable tokens. Each Serie has a merkleroot saved in a `struct` which is checked against each time the contract is requested to mint a token. 

To learn how to create a suitable merkle tree, and understand how `MerkleMint` works, please see the `test` folder and follow along below.  

The project is based on OpenZeppelin's MerkleProof library.

# Installation: 

### Part 1 (Solidity)

There are two parts to `MerkleMint`, the solidity contracts which verify the merkle tree and allow for counterfactual minting of tokens, and the Javascript library which simplifies interacting with the Solidity contracts. 


Clone the repo. 

`npm install`

The project uses [OpenZeppelin CLI](https://www.npmjs.com/package/@openzeppelin/cli) (please install it). 

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


### Part 1 (Javascript)

To see an example of how to use `MerkleMint` in a javascript file, look at the `test` folder to see an example of how the tests are run against the soldiity code. 

To create a new MerkleMint object: 

```
const {MerkleMint} = require("merklemint")

//Create a list of elements. This can be objects and should represent your Tokens. 
//You should not have duplicates (currently)
const elements = ["TokenURI1", "TokenURI2", "TokenURI3"]

//Create a new MerkleMint Object
const merkleMint = new MerkleMint(elements)
```

To get the root of your merkle tree: 

`console.log(merkleMint.getRoot())`

To get a merkle proof by index of your elements:

`console.log(merkleMint.getProofByIndex(0))`

To get a leaf using an element in your `elements` array:

`console.log(merkleMint.getLeaf("TokenURI1"))`

To get a proof using an element in your `elements` array: 

`console.log(merkleMint.getPRoof("TokenURI1"))`

### More documentation on the way!


# TODO: 
Create a useful utility for automating the merkle mint process. 




# The Problem



Thanx: @Nikesh @Fran @Palla
