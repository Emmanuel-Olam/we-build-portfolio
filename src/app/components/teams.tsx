import React, { useState, useEffect } from "react";
import { capsFirst } from "../utils";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin
} from 'react-icons/fa'

import {
  Container,
  Heading,
  VStack,
  Text,
  Flex,
  Avatar,
  HStack,
  Image,
  Box
} from "@chakra-ui/react";

import ChakraCarousel from "./carousel";

export function Teams() {
  const data = ["https://bit.ly/dan-abramov", "about/1.png", "about/2.png", 'https://cdn.pixabay.com/photo/2022/03/01/02/51/galaxy-7040416_1280.png',"https://bit.ly/dan-abramov", "about/1.png", "about/2.png", 'https://cdn.pixabay.com/photo/2022/03/01/02/51/galaxy-7040416_1280.png'];

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
      <ChakraCarousel gap={12}>
        {data.map((member, index) => (
          <Box
            key={index}
            bg={'red'}
            w={'full'}
          >
            <Image src={member} alt='Future builder team' w={'full'} h={'450px'} objectFit={'cover'} />
          </Box>
        ))}
      </ChakraCarousel>
    </Container>
  );
}
