# MerkleMint
A solution to minting non-fungible tokens for items in a) large data sets or b) data sets with large items. 

A HeritageDao Research Project: www.heritageDao.com


#Problem
The Heritage Dao needs to mint non-fungible tokens representing photographic assets in it's collection. Because the collection is so large, it should only be required to mint an assets token when absolutely nessesary, rather than minting all of them in advance. The idea being that the possiblity to mint an item, for an item that is not currently in use, is as good as actually having minted the item itself. 

To solve this a number of solutions were investigated, the two favorable solutions are: Signature Recovery and MerkleProofs, but both indiviuall have drawbacks. MerkleMint will show that the solution is a combination of the two techniques. 

#Signature Recovery
For Signature Recovery the Heritage Dao presigns the metadata for all the assets in it's collection. To mint an asset it is required to provide the relevant metadata details to the item (namely, the resulting off-chain location for the Asset metadata), the smart contract recovers the signature, checks that the signature is valid and then proceeds to mint the asset. 

Advantages: Ths process is fast. The Heritage Dao signs all items in the collection and makes this signature list availible publically. The collection can be infinitely large as signatures can be created on-demand, and it is trivial to generates large sets of signatures. 

Disadvantages: The smart contract appropriately limits minting to only items which are signed as authentically present in the HeritageDao Collection. The problem however is that the smart contract can not check if the signed item is actually a member of the Collection itself. This means that while the contract will disallow arbitrary minting, it does not prevent the arbitrary signing assets not inside the offical collection. This means that the vector of attack is now the private key responsible for signing data that is validated by the smart contract. 
While the Heritage Dao can make public it's entire collection and the cooresponding signatures, the public can not verify that this list is exhaustive. The public list constitutes only a subset of an infinite possible list of signed data. It is not possible for the smart contract to prove a item is not a member of the larger set, and it is not possible for the public to be confident only members of the Heritage Dao Collection can be minted. 

#MerkleProofs
Merkle Proofs allow for the creation of a Merkle Tree where we store a root on-chain and to mint and assets it is required to provide a suitable proof to the smart contract which should resolve to the correct root. 

Advantages: As the root of the Merkle Tree is dependent upon all of it's leaves, it is possible with certainty to identify all the possible members of a valid collection. This means the Heritage Dao Collection can publish in a public manner, all the assets which comprise a collection and users can know with certainty that only the assets included in this collection will properlly resolve to root stored on-chain, and thus only these assets are possible to mint. Unlike the signature recovery implementation, once the root is published on-chain, it is no longer possible for assets to be added to the collection. 

Disadvantages: For datasets with assets that are large in size, the creation of a merkle proof is computationally challanging. The 


@Nikesh @Fran @Palla
