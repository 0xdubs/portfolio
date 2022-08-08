import { Fragment, useEffect, useState } from 'react'
import {
  Stack,
  Input,
  InputGroup,
  InputRightElement,
  Icon,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react'
import PostCard from 'components/article/card'
import {
  PageSlideFade,
  StaggerChildren,
} from 'components/shared/animations/page-transitions'
import Header from 'components/shared/header'
import { MotionBox } from 'components/shared/animations/motion'
import { GetServerSideProps } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { motion, AnimatePresence } from 'framer-motion'
import PageLayout from 'components/layouts/pageLayout'
import { BiSearch } from 'react-icons/bi'
import { getDevtoPosts } from 'lib/fetchPosts'

const TURQUOISE = '#06b6d4'

const Posts = ({ posts }) => {
  const [searchValue, setSearchValue] = useState('')

  const filteredBlogPosts = posts.filter((data) => {
    const searchContent = data.title + data.description
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })
  filteredBlogPosts?.sort(
    (a, b) => +new Date(b.published_at) - +new Date(a.published_at)
  )

  return (
    <Fragment>
      <PageLayout title="Articles" description="A list of all articles and posts!">
        <PageSlideFade>
          <Header underlineColor={TURQUOISE} mt={0} mb={6}>
            Featured Articles
          </Header>
          <InputGroup maxW="30rem">
            <Input
              placeholder="Search articles"
              onChange={(e) => setSearchValue(e.target.value)}
              background={useColorModeValue('gray.100', '#1e2533')}
            />
            <InputRightElement>
              <Icon as={BiSearch} w={6} h={6} />
            </InputRightElement>
          </InputGroup>
          <StaggerChildren>
            <Stack spacing={4} mt={6}>
              <AnimatePresence>
                {!filteredBlogPosts.length && (
                  <Heading as="h1" pt={10} pb={10}>
                    No articles found
                  </Heading>
                )}
                {filteredBlogPosts.map((post, i) => (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: (i) => ({
                        opacity: 0,
                        y: -30 * i,
                      }),
                      visible: (i) => ({
                        opacity: 1,
                        y: 0,
                        transition: {
                          delay: i * 0.1,
                        },
                      }),
                    }}
                    custom={i}
                    key={post.slug}
                  >
                    <MotionBox whileHover={{ y: -5 }} key={i}>
                      <PostCard
                        post={post}
                        isLoading={false}
                        postDbLikes={0}
                      />
                    </MotionBox>
                  </motion.div>
                ))}
              </AnimatePresence>
            </Stack>
          </StaggerChildren>
        </PageSlideFade>
      </PageLayout>
    </Fragment>
  )
}

const root = process.cwd()

export const getServerSideProps: GetServerSideProps = async () => {
  let devtoPosts = await getDevtoPosts()

  devtoPosts = devtoPosts.filter((data) =>
    data.canonical_url.includes('dev.to')
  )
  const posts = [ ...devtoPosts]

  if (!posts) {
    return {
      notFound: true,
    }
  }

  return {
    props: { posts },
  }
}

export default Posts
