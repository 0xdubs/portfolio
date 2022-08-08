import * as React from 'react'
import {
  VStack,
  Text,
  useColorModeValue,
  HStack,
  IconButton,
  Tooltip,
} from '@chakra-ui/react'
import { PageSlideFade } from 'components/shared/animations/page-transitions'
import Header from 'components/shared/header'
import { RiSignalTowerLine, RiWifiOffLine } from 'react-icons/ri'
import LiveData from 'components/repos/live-data'
import useSound from 'use-sound'
import PageLayout from 'components/layouts/pageLayout'

const TURQUOISE = '#06b6d4'

const iconProps = {
  variant: 'ghost',
  size: 'md',
  isRound: true,
}

const RepositoriesList = ({ repositories }) => {
  const [activeTab, setActiveTab] = React.useState('live')

  const handleClick = (type) => {
    setActiveTab(type)
  }

  return (
    <PageLayout title="Repos" keywords="A list of open source projects">
      <PageSlideFade>
        <VStack align="start" spacing={3}>
          <HStack justifyContent={'space-between'} width={'100%'}>
            <Header underlineColor={TURQUOISE} mt={0} mb={0}>
              Github Repos
            </Header>
            <HStack>
              <Tooltip hasArrow label="Live github repos" placement="top">
                <IconButton
                  aria-label={'live'}
                  size="md"
                  colorScheme={'linkedin'}
                  icon={<RiSignalTowerLine />}
                  isActive={activeTab === 'live'}
                  onClick={() => handleClick('live')}
                  {...iconProps}
                />
              </Tooltip>
            </HStack>
          </HStack>
          <Text
            color={useColorModeValue('gray.500', 'gray.200')}
            textAlign="left"
          >
            This page lists some of the repositories I have
            published or contributed to.
          </Text>
        </VStack>
          <LiveData />
        
      </PageSlideFade>
    </PageLayout>
  )
}

export default RepositoriesList
