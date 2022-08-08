import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface Trait {
  trait_type: string;
  value: string;
}

interface Badges {
  trait: Trait;
}

export function Badges({ trait }: Badges) {
  return (
    <Box bg="gray.100" borderRadius="xl" color="gray.400" px={3} py={2}>
      <Text fontSize="xs" fontWeight="bold">
        {trait.trait_type}
      </Text>
      <Text fontSize="md" mt={-1}>
        {trait.value}
      </Text>
    </Box>
  );
}