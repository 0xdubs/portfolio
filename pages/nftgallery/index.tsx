import { Container, Heading } from "@chakra-ui/react";
import { RAINBOW_ENDPOINT } from "../../constants/endpoints"
import type { GetStaticProps } from "next";
import { GalleryImage } from "../../ui/core/gallery-image";
import { GalleryLayout } from "../../ui/layout";

import type { Rainbow } from "../../types/rainbow";

export interface HomePageProps {
  data: Rainbow["results"];
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(RAINBOW_ENDPOINT);
  const json = (await response.json()) as Rainbow;

  const data = json.results.filter((val) => {
    return val.token_id !== "0";
  });

  return {
    props: { data },
  };
};

export default function HomePage({ data }: HomePageProps) {
  return (
    <Container maxW="6xl" py={10}>
      <Heading as="h1" pb={4} size="xl">
        Daniel's NFT Gallery
      </Heading>

      <GalleryLayout>
        {data.map((rainbow) => (
          <GalleryImage
            key={rainbow.token_id}
            address={rainbow.asset_contract.address}
            imageUrl={rainbow.metadata.image_url}
            name={rainbow.metadata.name}
            tokenId={rainbow.token_id}
          />
        ))}
      </GalleryLayout>
    </Container>
  );
}