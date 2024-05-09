import { Project, ProjectKind, ProjectStatus } from '@/app/interfaces/project'
import { Box, Button, ButtonGroup, Flex, HStack, Heading, Skeleton, Text } from '@chakra-ui/react'
import { SingleProject } from './project'
import { useState } from 'react'
import { MAIN_COLOR } from '@/constant'
import useSWR from 'swr'
import Error from 'next/error'


export function Projects() {

  const [projectKind, setProjectKind] = useState<ProjectKind | null>(null)

  const fetcher = (url: string) => fetch(url).then(res => res.json())
  const { data, error, isLoading } = useSWR<{ data: ({ id: string } & Project)[] }, string>('/api/list', fetcher)

  const projectsData = data?.data;

  const loadingScreen = () => (
    <HStack alignItems='center' mt='4' spacing={10}>
      <Skeleton height="500px" width={'100%'} maxW={'300px'} />
      <Skeleton height="500px" width={'100%'} maxW={'300px'} />
    </HStack>
  )

  if (!isLoading && !projectsData) return <Error statusCode={500} title={
    "Something went wrong"
  } />

  const projects = projectKind ? projectsData?.filter(project => project.kind === projectKind) : projectsData

  return (
    <Box py={'4rem'} id='portfolio' data-aos="fade-up"  className='overflow-hidden '>

      <Flex
        justifyContent={{
          base: 'center',
          sm: 'space-between'
        }}
        gap={{
          base: '1rem',
          md: '0'
        }}
        alignItems='center'
        mb={{
          base: '3rem',
          md: 7
        }}
        flexWrap={{
          base: 'wrap',
          md: 'nowrap'
        }}
      >
        <Text
          fontSize={'2rem'}
          fontWeight={600}
        >Portfolio</Text>

        <ButtonGroup spacing='2'>
          <Button
            bg={projectKind === null ? MAIN_COLOR : 'transparent'}
            color='white'
            _focus={{
              bg: MAIN_COLOR
            }}
            onClick={() => setProjectKind(null)}
          >All</Button>
          <Button
            bg={projectKind === ProjectKind.PERSONAL ? MAIN_COLOR : 'transparent'}
            color='white'
            _focus={{
              bg: MAIN_COLOR
            }}
            onClick={() => setProjectKind(ProjectKind.PERSONAL)}
          >Personal</Button>
          <Button
            bg={projectKind === ProjectKind.PROFESSIONAL ? MAIN_COLOR : 'transparent'}
            color='white'
            _focus={{
              bg: MAIN_COLOR
            }}
            onClick={() => setProjectKind(ProjectKind.PROFESSIONAL)}
          >Professional</Button>
        </ButtonGroup>
      </Flex>

      {
        isLoading && (
          loadingScreen()
        )
      }

      {
        !isLoading && projects && (
          <Flex flexWrap='wrap' mt='4' gap={{
            base: '1rem',
            md: '2rem',
          }} justifyContent={{
            base: 'center',
            md: 'flex-start'
          }}>
            {
              projects.map((project, index) => (
                <SingleProject key={index} project={project} />
              ))
            }
          </Flex>
        )
      }

    </Box>
  )
}