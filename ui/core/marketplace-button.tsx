import { Image, Link, Text } from "@chakra-ui/react";
import React from "react";

interface MarketPlaceButton {
  link: string;
  src: string;
  title: string;
}

export function MarketPlaceButton({ link, src, title }: MarketPlaceButton) {
  return (
    <Link
      alignItems="center"
      boxShadow="md"
      display="flex"
      href={link}
      px={3}
      py={2}
      rounded="2xl"
      target="_blank"
      textDecoration="none"
    >
      <Image alt="opensea" boxSize="20px" src={src} />
      <Text color="gray.600" fontWeight="bold" pl={1}>
        {title}
      </Text>
    </Link>
  );
}