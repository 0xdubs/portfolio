
import PageLayout from 'components/layouts/pageLayout'
import { Box, Flex, Heading, Image, Modal, ModalContent, ModalOverlay, Stack, Text } from "@chakra-ui/react";
import { NFT_ENDPOINT, RAINBOW_ENDPOINT} from "../../../constants/endpoints"
import { Cancel } from "iconoir-react";
import type { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import type { Nft } from "../../../types/nft";
import type { Rainbow } from "../../../types/rainbow";
import { MarketplaceLinks } from "../../../ui/marketplace-links";
import { NftAddress } from "../../../ui/parts/nft-address";
import { NftDescription } from "../../../ui/parts/nft-description";

export interface NftPageProps {
  data: Nft;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(RAINBOW_ENDPOINT);
  const json = (await response.json()) as Rainbow;
  console.log("rainbow json",json)

  const paths = json.results.map((rainbow) => {
    return {
      params: { address: `${rainbow.asset_contract.address}_${rainbow.token_id}` },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const address = params?.address as string;
  const response = await fetch(`${NFT_ENDPOINT}${address}`);
  const data = (await response.json()) as NftPageProps;

  return {
    props: { data },
  };
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function Index({ data }: NftPageProps) {
  const router = useRouter();

  const handleClick = () => {
    void router.push("/");
  };

  return (
    <PageLayout title="NFT Gallery" keywords="My NFT Gallery">
    <Modal isCentered isOpen onClose={handleClick}>
      <ModalOverlay zIndex={1} />
      <Box
        bg="white"
        cursor="pointer"
        m={6}
        onClick={handleClick}
        p={2}
        position="absolute"
        right={0}
        rounded="full"
        top={0}
        zIndex={9999}
      >
        <Cancel height={20} strokeWidth={4} width={20} fr={undefined} />
      </Box>
      <ModalContent
        bg="none"
        boxShadow="none"
        css="height: -webkit-fill-available;"
        maxW={{ base: "90vw", md: "70vw" }}
        zIndex={2}
      >
        <Stack direction={{ base: "column", lg: "row" }} gap={6} m="auto">
          <Box>
            <Box boxShadow="lg" overflow="hidden" rounded="3xl" w={{ base: "full", xl: "30vw" }}>
              <Image alt={data.name} src={data.image_url} w="full" />
            </Box>
          </Box>
          <Box>
            <Stack bg="white" boxShadow="xl" p={7} rounded="2xl" w="full">
              <Flex align="center" gap="1">
                <Image
                  alt={data.asset_contract.name}
                  boxShadow="lg"
                  boxSize="20px"
                  rounded="full"
                  src={data.asset_contract.image_url}
                />
                <Text color="gray.400" fontWeight="medium">
                  {data.asset_contract.name}
                </Text>
              </Flex>
              <Heading as="h1" fontSize="2xl">
                {data.name}
              </Heading>
              <MarketplaceLinks data={data} />

              {data.description && <NftDescription description={data.description} />}

              {data.traits.length > 0 && <NftAddress traits={data.traits} />}
            </Stack>
          </Box>
        </Stack>
      </ModalContent>
    </Modal>
    </PageLayout>
  );
}

export default Index;