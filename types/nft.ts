// To parse this data:
//
//   import { Convert, Nft } from "./file";
//
//   const nft = Convert.toNft(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Nft {
    id: number;
    num_sales: number;
    background_color: null;
    image_url: string;
    image_preview_url: string;
    image_thumbnail_url: string;
    image_original_url: string;
    animation_url: null;
    animation_original_url: null;
    name: string;
    description: string | null;
    external_link: string;
    asset_contract: AssetContract;
    permalink: string;
    collection: Collection;
    decimals: number;
    token_metadata: string;
    is_nsfw: boolean;
    owner: Creator;
    sell_orders: null;
    seaport_sell_orders: null;
    creator: Creator;
    traits: Trait[];
    last_sale: LastSale;
    top_bid: null;
    listing_date: null;
    is_presale: boolean;
    transfer_fee_payment_token: null;
    transfer_fee: null;
    related_assets: any[];
    orders: null;
    auctions: any[];
    supports_wyvern: boolean;
    top_ownerships: TopOwnership[];
    ownership: null;
    highest_buyer_commitment: null;
    token_id: string;
  }
  
  export interface AssetContract {
    address: string;
    asset_contract_type: string;
    created_date: Date;
    name: string;
    nft_version: string | null;
    opensea_version: null;
    owner: number;
    schema_name: string;
    symbol: string;
    total_supply: string;
    description: string | null;
    external_link: string;
    image_url: string;
    default_to_fiat: boolean;
    dev_buyer_fee_basis_points: number;
    dev_seller_fee_basis_points: number;
    only_proxied_transfers: boolean;
    opensea_buyer_fee_basis_points: number;
    opensea_seller_fee_basis_points: number;
    buyer_fee_basis_points: number;
    seller_fee_basis_points: number;
    payout_address: string;
  }
  
  export interface Collection {
    payment_tokens: PaymentTokenElement[];
    primary_asset_contracts: AssetContract[];
    stats: Record<string, number>;
    banner_image_url: string;
    chat_url: null;
    created_date: Date;
    default_to_fiat: boolean;
    description: string | null;
    dev_buyer_fee_basis_points: string;
    dev_seller_fee_basis_points: string;
    discord_url: string;
    display_data: DisplayData;
    external_url: string;
    featured: boolean;
    featured_image_url: string;
    hidden: boolean;
    safelist_request_status: string;
    image_url: string;
    is_subject_to_whitelist: boolean;
    large_image_url: string;
    medium_username: null;
    name: string;
    only_proxied_transfers: boolean;
    opensea_buyer_fee_basis_points: string;
    opensea_seller_fee_basis_points: string;
    payout_address: string;
    require_email: boolean;
    short_description: null;
    slug: string;
    telegram_url: null;
    twitter_username: string;
    instagram_username: string;
    wiki_url: null;
    is_nsfw: boolean;
  }
  
  export interface DisplayData {
    card_display_style: string;
  }
  
  export interface PaymentTokenElement {
    id: number;
    symbol: string;
    address: string;
    image_url: string;
    name: string;
    decimals: number;
    eth_price: number;
    usd_price: number;
  }
  
  export interface Creator {
    user: User | null;
    profile_img_url: string;
    address: string;
    config: string;
  }
  
  export interface User {
    username: string;
  }
  
  export interface LastSale {
    asset: Asset;
    asset_bundle: null;
    event_type: string;
    event_timestamp: Date;
    auction_type: null;
    total_price: string;
    payment_token: LastSalePaymentToken;
    transaction: Transaction;
    created_date: Date;
    quantity: string;
  }
  
  export interface Asset {
    decimals: number;
    token_id: string;
  }
  
  export interface LastSalePaymentToken {
    symbol: string;
    address: string;
    image_url: string;
    name: string;
    decimals: number;
    eth_price: string;
    usd_price: string;
  }
  
  export interface Transaction {
    block_hash: string;
    block_number: string;
    from_account: Creator;
    id: number;
    timestamp: Date;
    to_account: Creator;
    transaction_hash: string;
    transaction_index: string;
  }
  
  export interface TopOwnership {
    owner: Creator;
    quantity: string;
  }
  
  export interface Trait {
    trait_type: string;
    value: string;
    display_type: null;
    max_value: null;
    trait_count: number;
    order: null;
  }