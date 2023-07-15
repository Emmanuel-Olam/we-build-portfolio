import { Project, ProjectKind, ProjectStatus } from '@/app/interfaces/project'
import { Box, Button, ButtonGroup, Flex, Heading, Text } from '@chakra-ui/react'
import { SingleProject } from './project'
import { useState } from 'react'
import { MAIN_COLOR } from '@/constant'

const projectsData: Project[] = [
  {
    title: 'NFT Marketplace',
    description: 'A marketplace for NFTs, built on the Ethereum blockchain.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    status: ProjectStatus.COMPLETED,
    kind: ProjectKind.PERSONAL,
    link: 'https://google.com',
  },
  {
    "title": "E-commerce Website",
    "description": "Developed an online store with secure payment integration.",
    "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "status": ProjectStatus.COMPLETED,
    "kind": ProjectKind.PROFESSIONAL,
    "link": "https://example.com/project2"
  },
  {
    "title": "Blog Platform",
    "description": "Built a blogging platform using Django and React.",
    "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "status": ProjectStatus.COMPLETED,
    "kind": ProjectKind.PERSONAL,
    "link": "https://example.com/project3"
  },
  {
    "title": "Mobile App UI Design",
    "description": "Designed the user interface for a mobile app targeting fitness enthusiasts.",
    "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "status": ProjectStatus.COMPLETED,
    "kind": ProjectKind.PROFESSIONAL,
    "link": "https://example.com/project4"
  },
  {
    "title": "Data Visualization Dashboard",
    "description": "Created a dashboard to visualize complex data sets using D3.js.",
    "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "status": ProjectStatus.COMPLETED,
    "kind": ProjectKind.PERSONAL,
    "link": "https://example.com/project5"
  },
  {
    "title": "Social Media Marketing Campaign",
    "description": "Executed a successful social media marketing campaign for a client.",
    "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "status": ProjectStatus.COMPLETED,
    "kind": ProjectKind.PROFESSIONAL,
    "link": "https://example.com/project6"
  },
  {
    "title": "Online Learning Platform",
    "description": "Developed a web-based platform for online courses and tutorials.",
    "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "status": ProjectStatus.ONGOING,
    "kind": ProjectKind.PERSONAL,
    "link": "https://example.com/project7"
  },
  {
    "title": "Financial Management App",
    "description": "Building a mobile app to help users manage their personal finances.",
    "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "status": ProjectStatus.ONGOING,
    "kind": ProjectKind.PROFESSIONAL,
    "link": "https://example.com/project8"
  },
  {
    "title": "Travel Photography Blog",
    "description": "Documenting my travel experiences through a photography-focused blog.",
    "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "status": ProjectStatus.ONGOING,
    "kind": ProjectKind.PERSONAL,
    "link": "https://example.com/project9"
  },
  {
    "title": "E-commerce SEO Strategy",
    "description": "Working on improving search engine rankings and traffic for an e-commerce website.",
    "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "status": ProjectStatus.ONGOING,
    "kind": ProjectKind.PROFESSIONAL,
    "link": "https://example.com/project10"
  }
]

export function Projects() {

  const [projectKind, setProjectKind] = useState<ProjectKind | null>(null)

  const projects = projectKind ? projectsData.filter(project => project.kind === projectKind) : projectsData

  return (
    <Box py={'4rem'} id='portfolio'>

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

    </Box>
  )
}