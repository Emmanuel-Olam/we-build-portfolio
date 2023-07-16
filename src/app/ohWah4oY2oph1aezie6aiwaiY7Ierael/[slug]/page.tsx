"use client";

import { Project, ProjectKind, ProjectStatus } from "@/app/interfaces/project";
import { ADMIN } from "@/constant";
import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  VStack,
  Skeleton,
  Image,
  Text,
  Badge,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import Error from "next/error";
import Link from "next/link";
import useSWR from 'swr'

export default function Page({ params }: { params: { slug: string } }) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const fetcher = (url: string) => fetch(url).then(res => res.json())
  const { data, error, isLoading } = useSWR<{ data: { id: string } & Project }, string>(`/api/view/?id=${params.slug}`, fetcher)


  if (isLoading || !data) return (
    <Skeleton height="100px" />
  )

  if (!data.data) return <Error statusCode={404} title={
    "Project not found"
  } />

  const record = data.data

  const onDelete = async () => {
    const res = await fetch(`/api/delete/${record.id}`, {
      method: 'DELETE',
    })
    if (res.ok) {
      window.location.href = `/${ADMIN}`
    }
  }

  return (
    <Box>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Delete {record.title}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight='bold' mb='1rem'>
              Are you sure you want to delete this project?
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' variant='outline'  mr={3} onClick={onClose}>
              Close
            </Button>

            <Button colorScheme='red' onClick={onDelete}>
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Heading mb={12}>
        Project - {record.title}
      </Heading>

      <VStack spacing={9} maxW={'500px'}>

        <FormControl id="image" isDisabled>
          <FormLabel fontWeight={600} fontSize={'1rem'} mb={4}>Image</FormLabel>
          <Image src={record.image} alt={record.title} rounded={'md'} />
        </FormControl>

        <FormControl id="image" isDisabled>
          <FormLabel fontWeight={600} fontSize={'1rem'} mb={4}>Link</FormLabel>
          <Text color={'blue.500'} fontWeight={'bold'} fontSize={'1rem'}>
            <Link href={record.link} target="_blank">
            {record.link}
            </Link>
          </Text>
        </FormControl>

        <FormControl id="description" isDisabled>
          <FormLabel fontWeight={600} fontSize={'1rem'} mb={4}>Description</FormLabel>
          <Text>
            {record.description}
          </Text>
        </FormControl>

        <FormControl id="status" isDisabled>
          <FormLabel fontWeight={600} fontSize={'1rem'} mb={4}>Status</FormLabel>
          {
            record.status === ProjectStatus.COMPLETED && <Badge colorScheme='green' borderRadius={'md'} p={1} px={2}>Completed</Badge>
          }
          {
            record.status === ProjectStatus.ONGOING && <Badge colorScheme='gray' borderRadius={'md'} p={1} px={2}>In progress</Badge>
          }
        </FormControl>

        <FormControl id="kind" isDisabled>
          <FormLabel fontWeight={600} fontSize={'1rem'} mb={4}>Kind</FormLabel>
          {
            record.kind === ProjectKind.PERSONAL && <Badge colorScheme='blue' borderRadius={'md'} p={1} px={2}>Personal</Badge>
          }
          {
            record.kind === ProjectKind.PROFESSIONAL && <Badge colorScheme='orange' borderRadius={'md'} p={1} px={2}>Professional</Badge>
          }
        </FormControl>
      </VStack>

      <ButtonGroup mt={12} spacing={5}>
        <Link href={`/${ADMIN}`}>
          <Button colorScheme={'blue'} variant={'outline'}>
            Back
          </Button>
        </Link>
        <Button colorScheme={'red'} leftIcon={<DeleteIcon />} onClick={onOpen}>
          Delete
        </Button>
      </ButtonGroup>
    </Box>
  );
}
