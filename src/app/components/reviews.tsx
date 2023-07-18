import React, { useState, useEffect } from "react";
import { capsFirst } from "../utils";

import {
  Container,
  Heading,
  VStack,
  Text,
  Flex,
  Avatar,
  HStack,
  Skeleton,
  Center
} from "@chakra-ui/react";

import ChakraCarousel from "./carousel";
import useSWR from 'swr'
import { TReview } from "../interfaces/reviews";
import Error from "next/error";

export function Reviews() {

  const fetcher = (url: string) => fetch(url).then(res => res.json())
  const { data, error, isLoading } = useSWR<{ data: ({ id: string } & TReview)[] }, string>('/api/reviews/list', fetcher)

  const reviews = data?.data;

  const loadingScreen = () => (
    <HStack alignItems='center' mt='4' spacing={10}>
      <Skeleton height="500px" width={'100%'}>
        <Center>
          <Text fontSize='2xl'>Loading...</Text>
        </Center>
      </Skeleton>
    </HStack>
  )

  if (!isLoading && !reviews) return <Error statusCode={500} title={
    "Something went wrong"
  } />

  return (
    <Container
      py={'4rem'}
      px={0}
      maxW={{
        base: "100%",
        sm: "35rem",
        md: "43.75rem",
        lg: "57.5rem",
        xl: "75rem",
        xxl: "87.5rem"
      }}
    >
      <Heading mb={10} textAlign="center">
        Project Reviews
      </Heading>

      {
        isLoading ? loadingScreen() : null
      }

      {
        !isLoading && reviews && (
          <ChakraCarousel gap={32}>
            {reviews.map((review, index) => (
              <Flex
                key={index}
                boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
                flexDirection="column"
                overflow="hidden"
                color="gray.300"
                rounded={5}
                flex={1}
                bg='gray.700'
                p={5}
                py={10}
                mb={10}
                justifyContent={'center'}
              >
                <VStack
                  textAlign={'center'}
                >
                  <Avatar
                    size='xl'
                    name={review.name}
                    src={review.image}
                    mb={3}
                  />
                  <VStack
                    mb={4}
                  >
                    <Heading
                      fontSize={"2xl"}
                    >
                      {capsFirst(review.name)}
                    </Heading>
                    <Text
                      fontSize={{ base: "sm", md: "md" }}
                      color="gray.400"
                    >
                      {capsFirst(review.project)}
                    </Text>
                  </VStack>
                  <Text>{capsFirst(review.body)}</Text>
                </VStack>
              </Flex>
            ))}
          </ChakraCarousel>
        )
      }
    </Container>
  );
}
