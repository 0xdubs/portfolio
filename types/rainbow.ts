// To parse this data:
//
//   import { Convert, Rainbow } from "./file";
//
//   const rainbow = Convert.toRainbow(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Rainbow {
    next: null;
    previous: null;
    results: Result[];
  }
  
  export interface Result {
    token_id: string;
    asset_contract: AssetContract;
    uri: string;
    permalink: string;
    owners_uri: string;
    collection: Collection;
    owner: Owner;
    creator: Owner | null;
    related_assets: any[];
    metadata: Metadata;
    chain_identifier: ChainIdentifier;
    orders_uri: string;
  }
  
  export interface AssetContract {
    address: string;
    name: string;
    chain_identifier: ChainIdentifier;
    contract_standard: ContractStandard;
    owner_uri: string;
    uri: string;
  }
  
  export enum ChainIdentifier {
    Ethereum = "ethereum",
  }
  
  export enum ContractStandard {
    Erc1155 = "ERC1155",
    Erc20 = "ERC20",
    Erc721 = "ERC721",
  }
  
  export interface Collection {
    external_url: null | string;
    name: string;
    slug: string;
    uri: string;
    image_url: null | string;
    featured_image_url: null | string;
    large_image_url: null | string;
  }
  
  export interface Owner {
    address: string;
    uri: string;
  }
  
  export interface Metadata {
    image_url: string;
    image_preview_url: string;
    image_thumbnail_url: string;
    image_original_url: string;
    animation_url: null | string;
    animation_original_url: null | string;
    background_color: null;
    traits: Trait[];
    name: null | string;
    description: null | string;
    external_url: null | string;
    metadata_url: null | string;
  }
  
  export interface Trait {
    trait_type: string;
    value: number | string;
    display_type: null | string;
    max_value: null;
    trait_count: number;
    order: null;
  }