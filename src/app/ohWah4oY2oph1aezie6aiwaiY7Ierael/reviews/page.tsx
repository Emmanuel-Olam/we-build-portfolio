"use client";

import { ADMIN } from "@/constant";
import { DeleteIcon, PlusSquareIcon, ViewIcon } from "@chakra-ui/icons";
import { BsPlus, BsPlusLg } from "react-icons/bs"
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Badge,
  Button,
  ButtonGroup,
  Flex,
  Skeleton,
  Center,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import useSWR from 'swr'

import Error from "next/error";
import { TReview } from "@/app/interfaces/reviews";


export default function Page() {

  const fetcher = (url: string) => fetch(url).then(res => res.json())
  const { data, error, isLoading } = useSWR<{ data: ({ id: string } & TReview)[] }, string>('/api/reviews/list', fetcher)

  if (!isLoading && !data?.data) return <Error statusCode={500} title={
    "Something went wrong"
  } />

  const records = data?.data

  return (
    <Box>
      <Flex gap={5} justifyContent={'space-between'} alignItems={'center'}>
        <Heading mb={12}>
          All Reviews <Badge colorScheme='green' fontSize={'1rem'} borderRadius={'md'} p={1} px={2} ml={5}>
            {records?.length || 0}
          </Badge>
        </Heading>

        <ButtonGroup spacing={5}>
          <Link href={`/${ADMIN}/reviews/create`}>
            <Button colorScheme="blue" size="md" ml={'auto'} leftIcon={<BsPlusLg />} variant={'outline'}>
              Add new review
            </Button>
          </Link>

          <Link href={`/${ADMIN}`}>
            <Button colorScheme="blue" size="md" ml={'auto'}>
              Projects
            </Button>
          </Link>
        </ButtonGroup>
      </Flex>

      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>
                #
              </Th>
              <Th>Name</Th>
              <Th>Project</Th>
              <Th></Th>
            </Tr>
          </Thead>
          {
            !isLoading && records &&
            <Tbody>
              {
                records.map((record, index) => (
                  <Tr key={index}>
                    <Td>{index + 1}</Td>
                    <Td>
                      {record.name}
                    </Td>
                    <Td>
                      {record.project}
                    </Td>
                    <Td>
                      <ButtonGroup spacing={5}>
                        <Link href={`/${ADMIN}/reviews/${record.id}`}>
                          <Button colorScheme="blue" size="sm">
                            <ViewIcon />
                          </Button>
                        </Link>
                      </ButtonGroup>
                    </Td>
                  </Tr>
                ))
              }
            </Tbody>
          }
        </Table>
      </TableContainer>

      {
        isLoading &&
        <Skeleton height="50px" my="10px" />
      }

      {
        !isLoading && records && records.length == 0 &&
        <Center py={10}>
          <Text fontSize="2rem" color="gray.500">
            No reviews found. <Link href={`/${ADMIN}/reviews/create`}
            style={{color: '#3182ce'}}
            >Create one?</Link>
          </Text>
        </Center>
      }
    </Box>
  );
}
