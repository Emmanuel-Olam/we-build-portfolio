"use client";

import { ADMIN } from "@/constant";
import { DeleteIcon, PlusSquareIcon, ViewIcon } from "@chakra-ui/icons";
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

import { Project, ProjectKind, ProjectStatus } from "../interfaces/project";
import Error from "next/error";


export default function Page() {

  const fetcher = (url: string) => fetch(url).then(res => res.json())
  const { data, error, isLoading } = useSWR<{ data: ({ id: string } & Project)[] }, string>('/api/list', fetcher)

  if (!isLoading && !data?.data) return <Error statusCode={500} title={
    "Something went wrong"
  } />

  const records = data?.data

  return (
    <Box>
      <Flex gap={5} justifyContent={'space-between'} alignItems={'center'}>
        <Heading mb={12}>
          All Projects <Badge colorScheme='green' fontSize={'1rem'} borderRadius={'md'} p={1} px={2} ml={5}>
            {records?.length || 0}
          </Badge>
        </Heading>

        <Link href={`/${ADMIN}/create`}>
          <Button colorScheme="blue" size="md" ml={'auto'} leftIcon={<PlusSquareIcon />}>
            Add new project
          </Button>
        </Link>
      </Flex>

      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>
                #
              </Th>
              <Th>Title</Th>
              <Th>Status</Th>
              <Th>Kind</Th>
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
                      {record.title}
                    </Td>
                    <Td>
                      {
                        record.status === ProjectStatus.COMPLETED && <Badge colorScheme='green' borderRadius={'md'} p={1} px={2}>Completed</Badge>
                      }
                      {
                        record.status === ProjectStatus.ONGOING && <Badge colorScheme='gray' borderRadius={'md'} p={1} px={2}>In progress</Badge>
                      }
                    </Td>
                    <Td>
                      {
                        record.kind === ProjectKind.PERSONAL && <Badge colorScheme='blue' borderRadius={'md'} p={1} px={2}>Personal</Badge>
                      }
                      {
                        record.kind === ProjectKind.PROFESSIONAL && <Badge colorScheme='orange' borderRadius={'md'} p={1} px={2}>Professional</Badge>
                      }
                    </Td>
                    <Td>
                      <ButtonGroup spacing={5}>
                        <Link href={`/${ADMIN}/${record.id}`}>
                          <Button colorScheme="blue" size="sm">
                            <ViewIcon />
                          </Button>
                        </Link>
                        <Button colorScheme="red" size="sm">
                          <DeleteIcon />
                        </Button>
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
            No projects yet. Create one now.
          </Text>
        </Center>
      }
    </Box>
  );
}
