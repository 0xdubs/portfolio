import { Flex } from "@chakra-ui/react";
import type { Nft } from "../types/nft";
import { MarketPlaceButton } from "./core/marketplace-button";

export interface MarketplaceLinksProps {
  data: Nft;
}

export function MarketplaceLinks({ data }: MarketplaceLinksProps) {
  return (
    <Flex flexWrap="wrap" gap={2}>
      <MarketPlaceButton
        link={`https://opensea.io/assets/ethereum/${data.asset_contract.address}/${data.token_id}`}
        src="/assets/opensea.png"
        title="OpenSea"
      />
      <MarketPlaceButton
        link={`https://rarible.com/token/${data.asset_contract.address}:${data.token_id}?tab=details`}
        src="/assets/rarible.png"
        title="Rarible"
      />
      <MarketPlaceButton
        link={`https://etherscan.io/token/${data.asset_contract.address}?a=${data.token_id}`}
        src="/assets/etherscan.png"
        title="Etherscan"
      />
    </Flex>
  );
}