import { Project, ProjectKind, ProjectStatus } from '@/app/interfaces/project';
import { SECONDARY_COLOR } from '@/constant';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Card,
  CardBody,
  CardFooter,
  ButtonGroup,
  Button,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Badge,
  HStack,
  Link,
  Box,
} from '@chakra-ui/react'

export function SingleProject({ project }: { project: Project }) {
  return (
    <Card
      bgColor={'transparent'}
      bgGradient={`linear(to-b, ${SECONDARY_COLOR}, #3f1d43)`}
    >
      <Box
        maxW='350px'
        w={'100%'}
      >
        <CardBody>
          <Image
            src={project.image}
            alt={project.title}
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>
              {project.title}
            </Heading>
            <Text>
              {project.description}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2' justifyContent={'space-between'} w='100%'>
            <HStack>
              {
                project.status === ProjectStatus.COMPLETED ? (
                  <Badge colorScheme='green' borderRadius={'md'} p={1} px={2}>Completed</Badge>
                ) : (
                  <Badge colorScheme='gray' borderRadius={'md'} p={1} px={2}>In progress</Badge>
                )
              }
              {
                project.kind === ProjectKind.PERSONAL ? (
                  <Badge colorScheme='blue' borderRadius={'md'} p={1} px={2}>Personal</Badge>
                ) : (
                  <Badge colorScheme='orange' borderRadius={'md'} p={1} px={2}>Professional</Badge>
                )
              }
            </HStack>
            {
              project.link ? (
                <Link href={project.link} isExternal>
                  <ExternalLinkIcon boxSize={'1.3rem'} color={'blue.100'}
                    transition={'color 0.2s ease'}
                    _hover={{ color: 'blue.200' }}
                  />
                </Link>
              ) : null
            }
          </ButtonGroup>
        </CardFooter>
      </Box>
    </Card>
  )
}