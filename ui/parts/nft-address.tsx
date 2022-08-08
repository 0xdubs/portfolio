import { Text, Wrap } from "@chakra-ui/react";
import React from "react";
import type { Trait } from "../../types/nft";
import { Badges } from "../core/badges";

interface NftAddressProps {
  traits: Trait[];
}

export function NftAddress({ traits }: NftAddressProps) {
  return (
    <>
      <Text fontSize="xl" fontWeight="bold" pt={10}>
        Attributes
      </Text>
      <Wrap>
        {traits.map((trait) => (
          <Badges key={trait.display_type} trait={trait} />
        ))}
      </Wrap>
    </>
  );
}