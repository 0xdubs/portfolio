import { Text } from "@chakra-ui/react";
import React from "react";

interface NftDescriptionProps {
  description: string;
}

export function NftDescription({ description }: NftDescriptionProps) {
  return (
    <>
      <Text fontSize="xl" fontWeight="bold" pt={8}>
        Description
      </Text>
      <Text color="gray.400">{description}</Text>
    </>
  );
}