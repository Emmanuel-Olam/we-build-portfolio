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
  HStack
} from "@chakra-ui/react";

import ChakraCarousel from "./carousel";

type TeamMember = {
  name: string;
  socials: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
  image: string;
  title: string;
};

export function Teams() {
  const [data, setData] = useState<TeamMember[]>([]);

  useEffect(() => {
    const data = [
      {
        name: "John Doe2",
        socials: {
          twitter: "https://twitter.com",
          facebook: "https://facebook.com",
          instagram: "https://instagram.com",
          linkedin: "https://linkedin.com",
        },
        image: "https://bit.ly/dan-abramov",
        title: "Backend Developer"
      },
      {
        name: "John Doe3",
        socials: {
          twitter: "https://twitter.com",
        },
        image: "https://bit.ly/dan-abramov",
        title: "Frontend Developer"
      },
      {
        name: "John Doe4",
        socials: {
          twitter: "https://twitter.com",
          facebook: "https://facebook.com",
        },
        image: "https://bit.ly/dan-abramov",
        title: "UI/UX Designer"
      },
      {
        name: "John Doe3",
        socials: {
          twitter: "https://twitter.com",
        },
        image: "https://bit.ly/dan-abramov",
        title: "Frontend Developer"
      },
      {
        name: "John Doe4",
        socials: {
          twitter: "https://twitter.com",
          facebook: "https://facebook.com",
        },
        image: "https://bit.ly/dan-abramov",
        title: "UI/UX Designer"
      }
    ];
    setData(data);
  }, []);

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
        Meet our team
      </Heading>

      <ChakraCarousel gap={32}>
        {data.map((member, index) => (
          <Flex
            key={index}
            flexDirection="column"
            overflow="hidden"
            rounded={5}
            flex={1}
            p={5}
            py={10}
            mb={10}
          >
            <VStack
              textAlign={'center'}
            >
              <Avatar
                size='xl'
                name={member.name}
                src={member.image}
                mb={3}
              />

              <Heading
                fontSize={"2xl"}
              >
                {capsFirst(member.name)}
              </Heading>
              <Text
                fontSize={{ base: "sm", md: "md" }}
                color="gray.400"
              >
                {member.title}
              </Text>

              <HStack
                spacing={5}
                mt={3}
              >
                {member.socials.twitter && (
                  <a href={member.socials.twitter}>
                    <FaTwitterSquare size={23} />
                  </a>
                )}

                {member.socials.facebook && (
                  <a href={member.socials.facebook}>
                    <FaFacebookSquare size={23} />
                  </a>
                )}

                {member.socials.instagram && (
                  <a href={member.socials.instagram}>
                    <FaInstagramSquare size={23} />
                  </a>
                )}

                {member.socials.linkedin && (
                  <a href={member.socials.linkedin}>
                    <FaLinkedin size={23} />
                  </a>
                )}
              </HStack>
            </VStack>
          </Flex>
        ))}
      </ChakraCarousel>
    </Container>
  );
}
