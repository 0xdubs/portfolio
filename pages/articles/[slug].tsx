import * as React from 'react';
import { useState, useEffect } from 'react';
import html from 'remark-html';
import {
  Box,
  Heading,
  VStack,
  Text,
  HStack,
  Flex,
  Tag,
  useColorModeValue,
  Collapse,
  Image,
  AspectRatio,
  Skeleton
} from '@chakra-ui/react';
import remark from 'remark';
import prism from 'remark-prism';
import { getTagColor } from '../../components/theme';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { BlogPost } from '../../interfaces/interface';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import PageLayout from 'components/layouts/pageLayout';
import { MotionBox } from 'components/shared/animations/motion';
import DevToCallToAction from 'components/shared/DevToCallToAction';
import { fadeInUp, stagger } from 'components/shared/animations/page-transitions';
import { motion } from 'framer-motion';
import { useLinkColor } from 'components/theme';
import { getDevtoPosts } from 'lib/fetchPosts';
import { HeartIcon, CommentIcon, EyeIcon } from 'components/shared/icons';
import DisplayText from 'components/shared/icons/DisplayText';

dayjs.extend(localizedFormat);

export interface AllBlogProps {
  blogDetails: BlogPost;
  articleContent: string;
}

const POST_VIEW_LIMIT = 100;

const ArticlePage: NextPage<AllBlogProps> = ({ articleContent, blogDetails }) => {
  const [showLikeButton, setShowLikeButton] = useState(false);
  const borderColor = useColorModeValue('transparent', 'gray.700');
  const linkColor = useLinkColor();

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, []);

  const listenToScroll = () => {
    if (window.scrollY > 150) setShowLikeButton(true);
    else setShowLikeButton(false);
  };

  return (
    <PageLayout
      title={blogDetails?.title}
      description={blogDetails?.description}
      image={blogDetails?.cover_image}
      keywords={blogDetails?.tags.join(', ')}
    >
      <Collapse in={showLikeButton} animateOpacity>
        <Box position="fixed" right="10%" top="50%" display={['none', 'none', 'none', 'block']}>
        </Box>
      </Collapse>
      <motion.div initial="initial" animate="animate" variants={stagger}>
        <VStack marginBottom="5" alignItems="left" textAlign="left">
          {blogDetails?.cover_image && (
            <MotionBox whileHover={{ scale: 1.02 }}>
              <AspectRatio ratio={1.85 / 1} w="100%" h="100%" rounded="xl">
                <Image
                  src={blogDetails?.cover_image}
                  fallback={<Skeleton />}
                  size="lg"
                  width={'full'}
                  height={'full'}
                  position="absolute"
                  border="2px solid"
                  borderColor={borderColor}
                  rounded="xl"
                  objectFit="cover"
                />
              </AspectRatio>
              <Box
                width={'full'}
                height={'full'}
                bg={useColorModeValue('gray.100', 'gray.900')}
                opacity={useColorModeValue('0.5', '1')}
              ></Box>
            </MotionBox>
          )}
          <motion.div variants={fadeInUp}>
            <Heading as="h1" size="xl" mt="2" mb="2">
              {blogDetails?.title}
            </Heading>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <HStack
              justifyContent="space-between"
              isInline
              flexDirection={['column', 'row', 'row']}
            >
              <HStack spacing={1} alignItems="center">
                {blogDetails?.tags.map((tag) => (
                  <Tag size={'md'} padding="0 3px" key={tag} colorScheme={getTagColor(tag)}>
                    {tag}
                  </Tag>
                ))}
              </HStack>
              <HStack spacing={2} isInline pt={['0.5rem', '0', '0']}>
                {blogDetails?.public_reactions_count ? (
                  <Flex alignItems="center">
                    <DisplayText
                      isLoading={false}
                      value={(Number(blogDetails.public_reactions_count) || 0)}
                    />
                    &nbsp;
                    <HeartIcon />
                  </Flex>
                ) : (
                  ''
                )}
                {blogDetails?.comments_count ? (
                  <Flex alignItems="center">
                    <DisplayText isLoading={false} value={blogDetails.comments_count} />
                    &nbsp;
                    <CommentIcon />
                  </Flex>
                ) : (
                  ''
                )}
              </HStack>
            </HStack>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <HStack spacing={2} alignItems="left" justifyContent={['center', 'left', 'left']}>
              <Text fontSize="xs">Published on</Text>
              <Text fontSize="xs" fontWeight="bold">
                {dayjs(blogDetails?.published_at).format('LL')}
              </Text>
            </HStack>
          </motion.div>
        </VStack>
        <motion.div variants={fadeInUp}>
          <Box className="article">
            <div dangerouslySetInnerHTML={{ __html: articleContent }} />
          </Box>
        </motion.div>
        {blogDetails?.url ? <DevToCallToAction href={blogDetails.url} /> : ''}
      </motion.div>
    </PageLayout>
  );
};

const root = process.cwd();
export const getStaticPaths: GetStaticPaths = async () => {
  let devData: BlogPost[] = await getDevtoPosts();
  devData = devData.filter((data) => data.canonical_url.includes('dev.to'));
  const devtoPaths = devData.map((data) => ({
    params: { slug: data?.slug }
  }));


  return {
    paths: [...devtoPaths],
    fallback: true
  };
};

const markdownToHtml = async (markdown: string) => {
  const result = await remark().use(html).use(prism).process(markdown);
  return result.toString();
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const devData: BlogPost[] = await getDevtoPosts();

  const selectedBlog = devData.filter(
    (data) => data?.slug === params?.slug && data.canonical_url.includes('dev.to')
  );
  let blogObj = null,
    remarkContent = null;

  if (selectedBlog.length) {
    const res = await fetch(`https://dev.to/api/articles/${selectedBlog[0]?.id}`);
    blogObj = await res.json();
    remarkContent = await markdownToHtml(blogObj.body_markdown);
  }

  if (!devData) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      articleContent: remarkContent,
      blogDetails: blogObj
    },
    revalidate: 1
  };
};

export default ArticlePage;
