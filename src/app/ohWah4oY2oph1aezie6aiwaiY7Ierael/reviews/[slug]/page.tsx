"use client";

import { TReview } from "@/app/interfaces/reviews";
import { capsFirst } from "@/app/utils";
import { ADMIN } from "@/constant";
import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  VStack,
  Skeleton,
  Image,
  Text,
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
  const { data, error, isLoading } = useSWR<{ data: { id: string } & TReview }, string>(`/api/reviews/view/?id=${params.slug}`, fetcher)


  if (isLoading || !data) return (
    <Skeleton height="100px" />
  )

  if (!data.data) return <Error statusCode={404} title={
    "Review not found"
  } />

  const record = data.data

  const onDelete = async () => {
    const res = await fetch(`/api/reviews/delete/${record.id}`, {
      method: 'DELETE',
    })
    if (res.ok) {
      window.location.href = `/${ADMIN}/reviews`
    }
  }

  return (
    <Box>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Delete {capsFirst(record.name) + "'s"} review
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight='bold' mb='1rem'>
              Are you sure you want to delete this review?
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' variant='outline' mr={3} onClick={onClose}>
              Close
            </Button>

            <Button colorScheme='red' onClick={onDelete}>
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Heading mb={12}>
        Review Detail
      </Heading>

      <VStack spacing={9} maxW={'500px'}>

        <FormControl isDisabled>
          <FormLabel fontWeight={600} fontSize={'1rem'} mb={4}>Name</FormLabel>
          <Text>
            {record.name}
          </Text>
        </FormControl>

        <FormControl isDisabled>
          <FormLabel fontWeight={600} fontSize={'1rem'} mb={4}>Review</FormLabel>
          <Text>
            {record.body}
          </Text>
        </FormControl>
      </VStack>

      <ButtonGroup mt={12} spacing={5}>
        <Link href={`/${ADMIN}/reviews`}>
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
