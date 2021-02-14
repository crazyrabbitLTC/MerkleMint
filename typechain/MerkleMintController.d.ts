/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface MerkleMintControllerInterface extends ethers.utils.Interface {
  functions: {
    "CREATOR_ROLE()": FunctionFragment;
    "DEFAULT_ADMIN_ROLE()": FunctionFragment;
    "MINTER_ROLE()": FunctionFragment;
    "addIpfsRefToSerie(bytes32,uint256)": FunctionFragment;
    "addSerie(bytes32,string,bytes32,uint256)": FunctionFragment;
    "archive(uint256)": FunctionFragment;
    "getCatalogueSize(uint256)": FunctionFragment;
    "getRoleAdmin(bytes32)": FunctionFragment;
    "getRoleMember(bytes32,uint256)": FunctionFragment;
    "getRoleMemberCount(bytes32)": FunctionFragment;
    "grantRole(bytes32,address)": FunctionFragment;
    "hasAssetBeenMinted(bytes32)": FunctionFragment;
    "hasRole(bytes32,address)": FunctionFragment;
    "isValidData(string,bytes32,bytes32,bytes32[])": FunctionFragment;
    "mintAsset(address,string,bytes32,bytes32[],uint256)": FunctionFragment;
    "renounceRole(bytes32,address)": FunctionFragment;
    "revokeRole(bytes32,address)": FunctionFragment;
    "token()": FunctionFragment;
    "tokenInSeriesRegister(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "CREATOR_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MINTER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addIpfsRefToSerie",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "addSerie",
    values: [BytesLike, string, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "archive",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getCatalogueSize",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleMember",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleMemberCount",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "hasAssetBeenMinted",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "isValidData",
    values: [string, BytesLike, BytesLike, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "mintAsset",
    values: [string, string, BytesLike, BytesLike[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokenInSeriesRegister",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "CREATOR_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MINTER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addIpfsRefToSerie",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addSerie", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "archive", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getCatalogueSize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleMember",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleMemberCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "hasAssetBeenMinted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isValidData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mintAsset", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokenInSeriesRegister",
    data: BytesLike
  ): Result;

  events: {
    "MerkleMinted(address,address,string,uint256,bytes32,bytes32,uint256)": EventFragment;
    "MetadataAdded(uint256,bytes32)": EventFragment;
    "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
    "RoleGranted(bytes32,address,address)": EventFragment;
    "RoleRevoked(bytes32,address,address)": EventFragment;
    "SerieAdded(uint256,bytes32,bytes32,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "MerkleMinted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MetadataAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SerieAdded"): EventFragment;
}

export class MerkleMintController extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: MerkleMintControllerInterface;

  functions: {
    CREATOR_ROLE(overrides?: CallOverrides): Promise<[string]>;

    "CREATOR_ROLE()"(overrides?: CallOverrides): Promise<[string]>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    "DEFAULT_ADMIN_ROLE()"(overrides?: CallOverrides): Promise<[string]>;

    MINTER_ROLE(overrides?: CallOverrides): Promise<[string]>;

    "MINTER_ROLE()"(overrides?: CallOverrides): Promise<[string]>;

    addIpfsRefToSerie(
      _ipfsHash: BytesLike,
      seriesNumber: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addIpfsRefToSerie(bytes32,uint256)"(
      _ipfsHash: BytesLike,
      seriesNumber: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    addSerie(
      merkleRoot: BytesLike,
      name: string,
      ipfsHash: BytesLike,
      itemCount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addSerie(bytes32,string,bytes32,uint256)"(
      merkleRoot: BytesLike,
      name: string,
      ipfsHash: BytesLike,
      itemCount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    archive(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, BigNumber, BigNumber] & {
        merkleRoot: string;
        serieName: string;
        seriesID: BigNumber;
        totalTokens: BigNumber;
        itemsRedeemed: BigNumber;
      }
    >;

    "archive(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, BigNumber, BigNumber] & {
        merkleRoot: string;
        serieName: string;
        seriesID: BigNumber;
        totalTokens: BigNumber;
        itemsRedeemed: BigNumber;
      }
    >;

    getCatalogueSize(
      series: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getCatalogueSize(uint256)"(
      series: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    "getRoleAdmin(bytes32)"(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getRoleMember(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "getRoleMember(bytes32,uint256)"(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getRoleMemberCount(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getRoleMemberCount(bytes32)"(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "grantRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    hasAssetBeenMinted(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "hasAssetBeenMinted(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "hasRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isValidData(
      _asset: string,
      _root: BytesLike,
      _leaf: BytesLike,
      _proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isValidData(string,bytes32,bytes32,bytes32[])"(
      _asset: string,
      _root: BytesLike,
      _leaf: BytesLike,
      _proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    mintAsset(
      recipient: string,
      tokenURI: string,
      leaf: BytesLike,
      proof: BytesLike[],
      series: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "mintAsset(address,string,bytes32,bytes32[],uint256)"(
      recipient: string,
      tokenURI: string,
      leaf: BytesLike,
      proof: BytesLike[],
      series: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "renounceRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "revokeRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    token(overrides?: CallOverrides): Promise<[string]>;

    "token()"(overrides?: CallOverrides): Promise<[string]>;

    tokenInSeriesRegister(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "tokenInSeriesRegister(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  CREATOR_ROLE(overrides?: CallOverrides): Promise<string>;

  "CREATOR_ROLE()"(overrides?: CallOverrides): Promise<string>;

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  "DEFAULT_ADMIN_ROLE()"(overrides?: CallOverrides): Promise<string>;

  MINTER_ROLE(overrides?: CallOverrides): Promise<string>;

  "MINTER_ROLE()"(overrides?: CallOverrides): Promise<string>;

  addIpfsRefToSerie(
    _ipfsHash: BytesLike,
    seriesNumber: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addIpfsRefToSerie(bytes32,uint256)"(
    _ipfsHash: BytesLike,
    seriesNumber: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  addSerie(
    merkleRoot: BytesLike,
    name: string,
    ipfsHash: BytesLike,
    itemCount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addSerie(bytes32,string,bytes32,uint256)"(
    merkleRoot: BytesLike,
    name: string,
    ipfsHash: BytesLike,
    itemCount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  archive(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, string, BigNumber, BigNumber, BigNumber] & {
      merkleRoot: string;
      serieName: string;
      seriesID: BigNumber;
      totalTokens: BigNumber;
      itemsRedeemed: BigNumber;
    }
  >;

  "archive(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, string, BigNumber, BigNumber, BigNumber] & {
      merkleRoot: string;
      serieName: string;
      seriesID: BigNumber;
      totalTokens: BigNumber;
      itemsRedeemed: BigNumber;
    }
  >;

  getCatalogueSize(
    series: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getCatalogueSize(uint256)"(
    series: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

  "getRoleAdmin(bytes32)"(
    role: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  getRoleMember(
    role: BytesLike,
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "getRoleMember(bytes32,uint256)"(
    role: BytesLike,
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getRoleMemberCount(
    role: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getRoleMemberCount(bytes32)"(
    role: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  grantRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "grantRole(bytes32,address)"(
    role: BytesLike,
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  hasAssetBeenMinted(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "hasAssetBeenMinted(bytes32)"(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  hasRole(
    role: BytesLike,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "hasRole(bytes32,address)"(
    role: BytesLike,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isValidData(
    _asset: string,
    _root: BytesLike,
    _leaf: BytesLike,
    _proof: BytesLike[],
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isValidData(string,bytes32,bytes32,bytes32[])"(
    _asset: string,
    _root: BytesLike,
    _leaf: BytesLike,
    _proof: BytesLike[],
    overrides?: CallOverrides
  ): Promise<boolean>;

  mintAsset(
    recipient: string,
    tokenURI: string,
    leaf: BytesLike,
    proof: BytesLike[],
    series: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "mintAsset(address,string,bytes32,bytes32[],uint256)"(
    recipient: string,
    tokenURI: string,
    leaf: BytesLike,
    proof: BytesLike[],
    series: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  renounceRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "renounceRole(bytes32,address)"(
    role: BytesLike,
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  revokeRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "revokeRole(bytes32,address)"(
    role: BytesLike,
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  token(overrides?: CallOverrides): Promise<string>;

  "token()"(overrides?: CallOverrides): Promise<string>;

  tokenInSeriesRegister(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "tokenInSeriesRegister(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    CREATOR_ROLE(overrides?: CallOverrides): Promise<string>;

    "CREATOR_ROLE()"(overrides?: CallOverrides): Promise<string>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    "DEFAULT_ADMIN_ROLE()"(overrides?: CallOverrides): Promise<string>;

    MINTER_ROLE(overrides?: CallOverrides): Promise<string>;

    "MINTER_ROLE()"(overrides?: CallOverrides): Promise<string>;

    addIpfsRefToSerie(
      _ipfsHash: BytesLike,
      seriesNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "addIpfsRefToSerie(bytes32,uint256)"(
      _ipfsHash: BytesLike,
      seriesNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    addSerie(
      merkleRoot: BytesLike,
      name: string,
      ipfsHash: BytesLike,
      itemCount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "addSerie(bytes32,string,bytes32,uint256)"(
      merkleRoot: BytesLike,
      name: string,
      ipfsHash: BytesLike,
      itemCount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    archive(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, BigNumber, BigNumber] & {
        merkleRoot: string;
        serieName: string;
        seriesID: BigNumber;
        totalTokens: BigNumber;
        itemsRedeemed: BigNumber;
      }
    >;

    "archive(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, BigNumber, BigNumber] & {
        merkleRoot: string;
        serieName: string;
        seriesID: BigNumber;
        totalTokens: BigNumber;
        itemsRedeemed: BigNumber;
      }
    >;

    getCatalogueSize(
      series: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getCatalogueSize(uint256)"(
      series: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

    "getRoleAdmin(bytes32)"(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getRoleMember(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "getRoleMember(bytes32,uint256)"(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getRoleMemberCount(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getRoleMemberCount(bytes32)"(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "grantRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    hasAssetBeenMinted(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "hasAssetBeenMinted(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "hasRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isValidData(
      _asset: string,
      _root: BytesLike,
      _leaf: BytesLike,
      _proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isValidData(string,bytes32,bytes32,bytes32[])"(
      _asset: string,
      _root: BytesLike,
      _leaf: BytesLike,
      _proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    mintAsset(
      recipient: string,
      tokenURI: string,
      leaf: BytesLike,
      proof: BytesLike[],
      series: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "mintAsset(address,string,bytes32,bytes32[],uint256)"(
      recipient: string,
      tokenURI: string,
      leaf: BytesLike,
      proof: BytesLike[],
      series: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "renounceRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "revokeRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    token(overrides?: CallOverrides): Promise<string>;

    "token()"(overrides?: CallOverrides): Promise<string>;

    tokenInSeriesRegister(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "tokenInSeriesRegister(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    MerkleMinted(
      Caller: null,
      Recipient: null,
      TokenURI: null,
      Series: null,
      root: null,
      leaf: null,
      seriesIndex: null
    ): EventFilter;

    MetadataAdded(
      SeriesNumber: BigNumberish | null,
      IPFSHash: null
    ): EventFilter;

    RoleAdminChanged(
      role: BytesLike | null,
      previousAdminRole: BytesLike | null,
      newAdminRole: BytesLike | null
    ): EventFilter;

    RoleGranted(
      role: BytesLike | null,
      account: string | null,
      sender: string | null
    ): EventFilter;

    RoleRevoked(
      role: BytesLike | null,
      account: string | null,
      sender: string | null
    ): EventFilter;

    SerieAdded(
      SeriesNumber: BigNumberish | null,
      IPFSHash: null,
      MerkleRoot: BytesLike | null,
      SerieName: null
    ): EventFilter;
  };

  estimateGas: {
    CREATOR_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    "CREATOR_ROLE()"(overrides?: CallOverrides): Promise<BigNumber>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    "DEFAULT_ADMIN_ROLE()"(overrides?: CallOverrides): Promise<BigNumber>;

    MINTER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    "MINTER_ROLE()"(overrides?: CallOverrides): Promise<BigNumber>;

    addIpfsRefToSerie(
      _ipfsHash: BytesLike,
      seriesNumber: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "addIpfsRefToSerie(bytes32,uint256)"(
      _ipfsHash: BytesLike,
      seriesNumber: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    addSerie(
      merkleRoot: BytesLike,
      name: string,
      ipfsHash: BytesLike,
      itemCount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "addSerie(bytes32,string,bytes32,uint256)"(
      merkleRoot: BytesLike,
      name: string,
      ipfsHash: BytesLike,
      itemCount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    archive(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "archive(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCatalogueSize(
      series: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getCatalogueSize(uint256)"(
      series: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getRoleAdmin(bytes32)"(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoleMember(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getRoleMember(bytes32,uint256)"(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoleMemberCount(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getRoleMemberCount(bytes32)"(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "grantRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    hasAssetBeenMinted(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "hasAssetBeenMinted(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "hasRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isValidData(
      _asset: string,
      _root: BytesLike,
      _leaf: BytesLike,
      _proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isValidData(string,bytes32,bytes32,bytes32[])"(
      _asset: string,
      _root: BytesLike,
      _leaf: BytesLike,
      _proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mintAsset(
      recipient: string,
      tokenURI: string,
      leaf: BytesLike,
      proof: BytesLike[],
      series: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "mintAsset(address,string,bytes32,bytes32[],uint256)"(
      recipient: string,
      tokenURI: string,
      leaf: BytesLike,
      proof: BytesLike[],
      series: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "renounceRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "revokeRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    "token()"(overrides?: CallOverrides): Promise<BigNumber>;

    tokenInSeriesRegister(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "tokenInSeriesRegister(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    CREATOR_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "CREATOR_ROLE()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    DEFAULT_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "DEFAULT_ADMIN_ROLE()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MINTER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "MINTER_ROLE()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addIpfsRefToSerie(
      _ipfsHash: BytesLike,
      seriesNumber: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addIpfsRefToSerie(bytes32,uint256)"(
      _ipfsHash: BytesLike,
      seriesNumber: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    addSerie(
      merkleRoot: BytesLike,
      name: string,
      ipfsHash: BytesLike,
      itemCount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addSerie(bytes32,string,bytes32,uint256)"(
      merkleRoot: BytesLike,
      name: string,
      ipfsHash: BytesLike,
      itemCount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    archive(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "archive(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCatalogueSize(
      series: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getCatalogueSize(uint256)"(
      series: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getRoleAdmin(bytes32)"(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoleMember(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getRoleMember(bytes32,uint256)"(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoleMemberCount(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getRoleMemberCount(bytes32)"(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "grantRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    hasAssetBeenMinted(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "hasAssetBeenMinted(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "hasRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isValidData(
      _asset: string,
      _root: BytesLike,
      _leaf: BytesLike,
      _proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isValidData(string,bytes32,bytes32,bytes32[])"(
      _asset: string,
      _root: BytesLike,
      _leaf: BytesLike,
      _proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mintAsset(
      recipient: string,
      tokenURI: string,
      leaf: BytesLike,
      proof: BytesLike[],
      series: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "mintAsset(address,string,bytes32,bytes32[],uint256)"(
      recipient: string,
      tokenURI: string,
      leaf: BytesLike,
      proof: BytesLike[],
      series: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "renounceRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "revokeRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "token()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenInSeriesRegister(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "tokenInSeriesRegister(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}