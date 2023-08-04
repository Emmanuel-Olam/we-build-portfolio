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
  const data = [
    "https://res.cloudinary.com/dpfpplv6k/image/upload/v1691016232/FUBA/IMG_8925_zoac8a.jpg",
    "https://res.cloudinary.com/dpfpplv6k/image/upload/v1691016334/FUBA/IMG_8918_-_Copy_j3nt1j.jpg",
    "https://res.cloudinary.com/dpfpplv6k/image/upload/v1691014781/FUBA/IMG_8893_qdsirp.jpg",
    "https://res.cloudinary.com/dpfpplv6k/image/upload/v1691014780/FUBA/IMG_8896_pvs85g.jpg",
    "https://res.cloudinary.com/dpfpplv6k/image/upload/v1691017037/FUBA/IMG_8911_mogjy3.jpg"
  ];

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
