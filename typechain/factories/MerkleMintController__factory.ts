/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MerkleMintController } from "../MerkleMintController";

export class MerkleMintController__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _token: string,
    creators: string[],
    minters: string[],
    overrides?: Overrides
  ): Promise<MerkleMintController> {
    return super.deploy(
      _token,
      creators,
      minters,
      overrides || {}
    ) as Promise<MerkleMintController>;
  }
  getDeployTransaction(
    _token: string,
    creators: string[],
    minters: string[],
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _token,
      creators,
      minters,
      overrides || {}
    );
  }
  attach(address: string): MerkleMintController {
    return super.attach(address) as MerkleMintController;
  }
  connect(signer: Signer): MerkleMintController__factory {
    return super.connect(signer) as MerkleMintController__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MerkleMintController {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MerkleMintController;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IMerkleMintCore",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "creators",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "minters",
        type: "address[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "Caller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "Recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "TokenURI",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "Series",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "root",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "leaf",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "seriesIndex",
        type: "uint256",
      },
    ],
    name: "MerkleMinted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "SeriesNumber",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "IPFSHash",
        type: "bytes32",
      },
    ],
    name: "MetadataAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "SeriesNumber",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "IPFSHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "MerkleRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "SerieName",
        type: "string",
      },
    ],
    name: "SerieAdded",
    type: "event",
  },
  {
    inputs: [],
    name: "CREATOR_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINTER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_ipfsHash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "seriesNumber",
        type: "uint256",
      },
    ],
    name: "addIpfsRefToSerie",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "merkleRoot",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "bytes32",
        name: "ipfsHash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "itemCount",
        type: "uint256",
      },
    ],
    name: "addSerie",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "archive",
    outputs: [
      {
        internalType: "bytes32",
        name: "merkleRoot",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "serieName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "seriesID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalTokens",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "itemsRedeemed",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "series",
        type: "uint256",
      },
    ],
    name: "getCatalogueSize",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "hasAssetBeenMinted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_asset",
        type: "string",
      },
      {
        internalType: "bytes32",
        name: "_root",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_leaf",
        type: "bytes32",
      },
      {
        internalType: "bytes32[]",
        name: "_proof",
        type: "bytes32[]",
      },
    ],
    name: "isValidData",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "string",
        name: "tokenURI",
        type: "string",
      },
      {
        internalType: "bytes32",
        name: "leaf",
        type: "bytes32",
      },
      {
        internalType: "bytes32[]",
        name: "proof",
        type: "bytes32[]",
      },
      {
        internalType: "uint256",
        name: "series",
        type: "uint256",
      },
    ],
    name: "mintAsset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IMerkleMintCore",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tokenInSeriesRegister",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200247438038062002474833981810160405260608110156200003757600080fd5b8101908080519060200190929190805160405193929190846401000000008211156200006257600080fd5b838201915060208201858111156200007957600080fd5b82518660208202830111640100000000821117156200009757600080fd5b8083526020830192505050908051906020019060200280838360005b83811015620000d0578082015181840152602081019050620000b3565b5050505090500160405260200180516040519392919084640100000000821115620000fa57600080fd5b838201915060208201858111156200011157600080fd5b82518660208202830111640100000000821117156200012f57600080fd5b8083526020830192505050908051906020019060200280838360005b83811015620001685780820151818401526020810190506200014b565b5050505090500160405250505060005b8251811015620001d657620001c87f828634d95e775031b9ff576b159a8509d3053581a8c9c4d7d86899e0afcd882f848381518110620001b457fe5b60200260200101516200028360201b60201c565b808060010191505062000178565b5060005b815181101562000238576200022a7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a68383815181106200021657fe5b60200260200101516200028360201b60201c565b8080600101915050620001da565b5082600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505062000419565b6200029582826200029960201b60201c565b5050565b620002c7816000808581526020019081526020016000206000016200033c60201b620018d51790919060201c565b156200033857620002dd6200037460201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b60006200036c836000018373ffffffffffffffffffffffffffffffffffffffff1660001b6200037c60201b60201c565b905092915050565b600033905090565b6000620003908383620003f660201b60201c565b620003eb578260000182908060018154018082558091505060019003906000526020600020016000909190919091505582600001805490508360010160008481526020019081526020016000208190555060019050620003f0565b600090505b92915050565b600080836001016000848152602001908152602001600020541415905092915050565b61204b80620004296000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c80638aeda25a116100ad578063a217fddf11610071578063a217fddf14610880578063ca15c8731461089e578063d5391393146108e0578063d547741f146108fe578063fc0c546a1461094c57610121565b80638aeda25a146106955780639010d07c146106b357806391d148541461071557806393c829fc1461077957806395d49bcb1461083c57610121565b80632f2ff15d116100f45780632f2ff15d1461036557806336568abe146103b357806343af307a14610401578063453406fd146105845780637d60663e146105bc57610121565b806303b7554c146101265780631930e4241461029f578063248a9ca3146102e15780632640eee814610323575b600080fd5b6102876004803603608081101561013c57600080fd5b810190808035906020019064010000000081111561015957600080fd5b82018360208201111561016b57600080fd5b8035906020019184600183028401116401000000008311171561018d57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190929190803590602001909291908035906020019064010000000081111561020457600080fd5b82018360208201111561021657600080fd5b8035906020019184602083028401116401000000008311171561023857600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050509192919290505050610980565b60405180821515815260200191505060405180910390f35b6102cb600480360360208110156102b557600080fd5b8101908080359060200190929190505050610a1a565b6040518082815260200191505060405180910390f35b61030d600480360360208110156102f757600080fd5b8101908080359060200190929190505050610a32565b6040518082815260200191505060405180910390f35b61034f6004803603602081101561033957600080fd5b8101908080359060200190929190505050610a51565b6040518082815260200191505060405180910390f35b6103b16004803603604081101561037b57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a74565b005b6103ff600480360360408110156103c957600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610afd565b005b610582600480360360a081101561041757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019064010000000081111561045457600080fd5b82018360208201111561046657600080fd5b8035906020019184600183028401116401000000008311171561048857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190929190803590602001906401000000008111156104f557600080fd5b82018360208201111561050757600080fd5b8035906020019184602083028401116401000000008311171561052957600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190929190505050610b96565b005b6105ba6004803603604081101561059a57600080fd5b8101908080359060200190929190803590602001909291905050506110c7565b005b610693600480360360808110156105d257600080fd5b8101908080359060200190929190803590602001906401000000008111156105f957600080fd5b82018360208201111561060b57600080fd5b8035906020019184600183028401116401000000008311171561062d57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001909291908035906020019092919050505061124a565b005b61069d611661565b6040518082815260200191505060405180910390f35b6106e9600480360360408110156106c957600080fd5b810190808035906020019092919080359060200190929190505050611685565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6107616004803603604081101561072b57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506116b6565b60405180821515815260200191505060405180910390f35b6107a56004803603602081101561078f57600080fd5b81019080803590602001909291905050506116e7565b6040518086815260200180602001858152602001848152602001838152602001828103825286818151815260200191508051906020019080838360005b838110156107fd5780820151818401526020810190506107e2565b50505050905090810190601f16801561082a5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b6108686004803603602081101561085257600080fd5b81019080803590602001909291905050506117b5565b60405180821515815260200191505060405180910390f35b6108886117d5565b6040518082815260200191505060405180910390f35b6108ca600480360360208110156108b457600080fd5b81019080803590602001909291905050506117dc565b6040518082815260200191505060405180910390f35b6108e8611802565b6040518082815260200191505060405180910390f35b61094a6004803603604081101561091457600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611826565b005b6109546118af565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600082856040516020018082805190602001908083835b602083106109ba5780518252602082019150602081019050602083039250610997565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051602081830303815290604052805190602001201415610a0d57610a06828585611905565b9050610a12565b600090505b949350505050565b60046020528060005260406000206000915090505481565b6000806000838152602001908152602001600020600201549050919050565b600060036000838152602001908152602001600020600601805490509050919050565b610a9a60008084815260200190815260200160002060020154610a956119ba565b6116b6565b610aef576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180611f13602f913960400191505060405180910390fd5b610af982826119c2565b5050565b610b056119ba565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610b88576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180611fe7602f913960400191505060405180910390fd5b610b928282611a55565b5050565b60006003600083815260200190815260200160002050602060ff1611610c24576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f53657269657320646f6573206e6f74206578697374000000000000000000000081525060200191505060405180910390fd5b6000848285856040516020018085805190602001908083835b60208310610c605780518252602082019150602081019050602083039250610c3d565b6001836020036101000a038019825116818451168082178552505050505050905001848152602001838152602001828051906020019060200280838360005b83811015610cba578082015181840152602081019050610c9f565b505050509050019450505050506040516020818303038152906040528051906020012090506005600082815260200190815260200160002060009054906101000a900460ff1615610d73576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f41737365742068617320616c7265616479206265656e206d696e74656400000081525060200191505060405180910390fd5b610d8785610d8084611ae8565b8686610980565b610ddc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526028815260200180611ec96028913960400191505060405180910390fd5b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663216ce73088886040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610e89578082015181840152602081019050610e6e565b50505050905090810190601f168015610eb65780820380516001836020036101000a031916815260200191505b509350505050602060405180830381600087803b158015610ed657600080fd5b505af1158015610eea573d6000803e3d6000fd5b505050506040513d6020811015610f0057600080fd5b8101908080519060200190929190505050905060036000848152602001908152602001600020600601819080600181540180825580915050600190039060005260206000200160009091909190915055600360008481526020019081526020016000206005016000815480929190600101919050555060016005600084815260200190815260200160002060006101000a81548160ff0219169083151502179055507f17ec6f2462cde2755a41cf045cd289c6ee3c03f191af9ce76a6d3b626f01413033888886610fd088611ae8565b8a6001600360008c81526020019081526020016000206006018054905003604051808873ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff16815260200180602001868152602001858152602001848152602001838152602001828103825287818151815260200191508051906020019080838360005b8381101561107e578082015181840152602081019050611063565b50505050905090810190601f1680156110ab5780820380516001836020036101000a031916815260200191505b509850505050505050505060405180910390a150505050505050565b6110f17f828634d95e775031b9ff576b159a8509d3053581a8c9c4d7d86899e0afcd882f336116b6565b611163576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260178152602001807f43616c6c6572206973206e6f7420612063726561746f7200000000000000000081525060200191505060405180910390fd5b806003600083815260200190815260200160002060030154146111d1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603e815260200180611f72603e913960400191505060405180910390fd5b60036000828152602001908152602001600020600101829080600181540180825580915050600190039060005260206000200160009091909190915055807ffbf2f09d96167f6cc1c0b34cd3688075351f4a85bf740c673fc70a7766bca2ef836040518082815260200191505060405180910390a25050565b6000602060ff16116112c4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260178152602001807f4e6f204d65726b6c6520526f6f742070726f766964656400000000000000000081525060200191505060405180910390fd5b600083511161133b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f4e6f204e616d652070726f76696465640000000000000000000000000000000081525060200191505060405180910390fd5b6000602060ff16116113b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f4e6f204950465320686173682070726f7669646564000000000000000000000081525060200191505060405180910390fd5b6000811161142b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f496e76616c6964204974656d20436f756e74000000000000000000000000000081525060200191505060405180910390fd5b6114557f828634d95e775031b9ff576b159a8509d3053581a8c9c4d7d86899e0afcd882f336116b6565b6114c7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260178152602001807f43616c6c6572206973206e6f7420612063726561746f7200000000000000000081525060200191505060405180910390fd5b60006114d36001611b69565b905084600360008381526020019081526020016000206000018190555080600360008381526020019081526020016000206003018190555083600360008381526020019081526020016000206002019080519060200190611535929190611e2b565b5081600360008381526020019081526020016000206004018190555060006003600083815260200190815260200160002060050181905550600360008281526020019081526020016000206001018390806001815401808255809150506001900390600052602060002001600090919091909150556115b46001611b77565b84817f83d297adb38b211927f07169fd6fd9ac2974ce4854beabed2aaa204864a7131385876040518083815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561161f578082015181840152602081019050611604565b50505050905090810190601f16801561164c5780820380516001836020036101000a031916815260200191505b50935050505060405180910390a35050505050565b7f828634d95e775031b9ff576b159a8509d3053581a8c9c4d7d86899e0afcd882f81565b60006116ae82600080868152602001908152602001600020600001611b8d90919063ffffffff16565b905092915050565b60006116df82600080868152602001908152602001600020600001611ba790919063ffffffff16565b905092915050565b6003602052806000526040600020600091509050806000015490806002018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156117995780601f1061176e57610100808354040283529160200191611799565b820191906000526020600020905b81548152906001019060200180831161177c57829003601f168201915b5050505050908060030154908060040154908060050154905085565b60056020528060005260406000206000915054906101000a900460ff1681565b6000801b81565b60006117fb600080848152602001908152602001600020600001611bd7565b9050919050565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b61184c600080848152602001908152602001600020600201546118476119ba565b6116b6565b6118a1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526030815260200180611f426030913960400191505060405180910390fd5b6118ab8282611a55565b5050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006118fd836000018373ffffffffffffffffffffffffffffffffffffffff1660001b611bec565b905092915050565b60008082905060005b85518110156119ac57600086828151811061192557fe5b6020026020010151905080831161196c578281604051602001808381526020018281526020019250505060405160208183030381529060405280519060200120925061199e565b808360405160200180838152602001828152602001925050506040516020818303038152906040528051906020012092505b50808060010191505061190e565b508381149150509392505050565b600033905090565b6119e9816000808581526020019081526020016000206000016118d590919063ffffffff16565b15611a51576119f66119ba565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b611a7c81600080858152602001908152602001600020600001611c5c90919063ffffffff16565b15611ae457611a896119ba565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b600080600360008481526020019081526020016000206000015490506000801b811415611b60576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526037815260200180611fb06037913960400191505060405180910390fd5b80915050919050565b600081600001549050919050565b6001816000016000828254019250508190555050565b6000611b9c8360000183611c8c565b60001c905092915050565b6000611bcf836000018373ffffffffffffffffffffffffffffffffffffffff1660001b611d0f565b905092915050565b6000611be582600001611d32565b9050919050565b6000611bf88383611d0f565b611c51578260000182908060018154018082558091505060019003906000526020600020016000909190919091505582600001805490508360010160008481526020019081526020016000208190555060019050611c56565b600090505b92915050565b6000611c84836000018373ffffffffffffffffffffffffffffffffffffffff1660001b611d43565b905092915050565b600081836000018054905011611ced576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180611ef16022913960400191505060405180910390fd5b826000018281548110611cfc57fe5b9060005260206000200154905092915050565b600080836001016000848152602001908152602001600020541415905092915050565b600081600001805490509050919050565b60008083600101600084815260200190815260200160002054905060008114611e1f5760006001820390506000600186600001805490500390506000866000018281548110611d8e57fe5b9060005260206000200154905080876000018481548110611dab57fe5b9060005260206000200181905550600183018760010160008381526020019081526020016000208190555086600001805480611de357fe5b60019003818190600052602060002001600090559055866001016000878152602001908152602001600020600090556001945050505050611e25565b60009150505b92915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611e6c57805160ff1916838001178555611e9a565b82800160010185558215611e9a579182015b82811115611e99578251825591602001919060010190611e7e565b5b509050611ea79190611eab565b5090565b5b80821115611ec4576000816000905550600101611eac565b509056fe4d65726b6c654d696e74436f6e74726f6c6c65723a3a204e6f7420612076616c6964204173736574456e756d657261626c655365743a20696e646578206f7574206f6620626f756e6473416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e2061646d696e20746f206772616e74416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e2061646d696e20746f207265766f6b654d65726b6c654d696e74436f6e74726f6c6c65723a3a61646449706673526566546f53657269653a3a20536572696520646f6573206e6f742045786973744d65726b6c654d696e74436f6e74726f6c6c65723a3a5f66696e64526f6f743a3a204e6f20737563682073657269657320657869737473416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636520726f6c657320666f722073656c66a26469706673582212202e39044f5be2aa28e8de3aeca3839f57fccf7b68e2129d90c10a586d07ce1d3164736f6c63430007030033";