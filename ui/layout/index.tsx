import { Box, Grid } from "@chakra-ui/react";
import Head from "next/head";
import type { ReactNode } from "react";
import { MetaTags } from "../../ui/seo/meta-tags";

export interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <Box as="main">
      <Head>
        <meta content="minimum-scale=1, initial-scale=1, width=device-width" name="viewport" />
      </Head>
      <MetaTags />
      {children}
    </Box>
  );
}

export function GalleryLayout({ children }: LayoutProps) {
  return (
    <Grid
      gap={6}
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)", xl: "repeat(4, 1fr)" }}
    >
      {children}
    </Grid>
  );
}