import * as React from 'react';
import {
  VStack,
  Text,
  Tabs,
  TabPanels,
  TabPanel,
  useColorModeValue,
  SimpleGrid
} from '@chakra-ui/react';
import { GetStaticProps, NextPage } from 'next';
import Section from 'components/skills/section';
import { AiTwotoneThunderbolt, AiOutlineCloudServer } from 'react-icons/ai';
import { BiDesktop } from 'react-icons/bi';
import { GiSpiderWeb } from 'react-icons/gi';
import SkillCard from 'components/skills/skill-card';
import { skillsArray } from 'data/data';
import Header from 'components/shared/header';
import { MotionBox } from 'components/shared/animations/motion';
import { container, PageSlideFade } from 'components/shared/animations/page-transitions';
import PageLayout from '../components/layouts/pageLayout';
import { SkillProps } from 'interfaces/interface';

const TechStack: NextPage<SkillProps> = ({ skills }) => {

  return (
    <PageLayout title="Skills" keywords="rails, ruby, react, javascript, typescript">
      <PageSlideFade>
        <VStack spacing={8}>
          <Section>
            <VStack>
              <Header mt={0} mb={1}>
                Tech Stack
              </Header>
              <Text
                fontSize={'xl'}
                color={useColorModeValue('gray.500', 'gray.200')}
                maxW="lg"
                textAlign="center"
              >
                A list of my favorite tools and technologies that I use on a regular basis.
              </Text>
            </VStack>
          </Section>
          <Section zIndex={5}>
            <Tabs variant="soft-rounded" colorScheme="blue" align="center" w="100%">
              <TabPanels minHeight={'45vh'}>
                <TabPanel px={0}>
                  <MotionBox variants={container} initial="hidden" animate="visible">
                    <SimpleGrid columns={[1, 1, 2]} spacing={4} mt={8}>
                      {skills.map((tool, index) => (
                        <SkillCard
                          key={index}
                          name={tool.name}
                          description={tool.description}
                          image={tool.image}
                          // platform={"web"}
                          link={tool.link}
                        />
                      ))}
                    </SimpleGrid>
                  </MotionBox>
                </TabPanel>
                <TabPanel px={0}>
                  <MotionBox variants={container} initial="hidden" animate="visible">
                    <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                      {skills.map((tool, index) => (
                        <SkillCard
                          key={index}
                          name={tool.name}
                          description={tool.description}
                          image={tool.image}
                          // platform={"web"}
                          link={tool.link}
                        />
                      ))}
                    </SimpleGrid>
                  </MotionBox>
                </TabPanel>
                <TabPanel px={0}>
                  <MotionBox variants={container} initial="hidden" animate="visible">
                    <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                      {skills.map((tool, index) => (
                        <SkillCard
                          key={index}
                          name={tool.name}
                          description={tool.description}
                          image={tool.image}
                          // platform={"web"}
                          link={tool.link}
                        />
                      ))}
                    </SimpleGrid>
                  </MotionBox>
                </TabPanel>
                <TabPanel px={0}>
                  <MotionBox variants={container} initial="hidden" animate="visible">
                    <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                      {skills.map((tool, index) => (
                        <SkillCard
                          key={index}
                          name={tool.name}
                          description={tool.description}
                          image={tool.image}
                          // platform={"web"}
                          link={tool.link}
                        />
                      ))}
                    </SimpleGrid>
                  </MotionBox>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Section>
        </VStack>
      </PageSlideFade>
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps<SkillProps> = () => {
  return {
    props: {
      skills: skillsArray
    }
  };
};

export default TechStack;
