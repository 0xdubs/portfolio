import { Box, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface GalleryImage {
  address: string;
  tokenId: string;
  name: string | null;
  imageUrl: string;
}

export function GalleryImage({ address, tokenId, name, imageUrl }: GalleryImage) {
  return (
    <Box>
      <a href={`https://opensea.io/assets/ethereum/${address}/${tokenId}`} target="_blank" rel="noopener noreferrer">
        <Box
          _hover={{
            transform: "scale(1.05)",
            transition: "0.2s",
          }}
          cursor="pointer"
          display="block"
          h={0}
          overflow="hidden"
          paddingBottom="100%"
          position="relative"
          rounded="2xl"
          shadow="2xl"
        >
          <Image
            alt={name ?? tokenId}
            h="full"
            objectFit="cover"
            objectPosition="center"
            position="absolute"
            src={imageUrl}
            w="full"
          />
        </Box>
        </a>
      <Text color="gray.400" fontSize="sm" fontWeight="bold" pl={2} pt={1}>
        {name ?? tokenId}
      </Text>
    </Box>
  );
}