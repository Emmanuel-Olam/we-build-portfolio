"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Box, Circle, Container, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import Hero from "./components/LandingPage/hero";
import Footer from "./components/footer";
import { MAIN_COLOR, SECONDARY_COLOR, TERTIARY_COLOR } from "@/constant";
import { Providers } from "./providers";

const POINT_ICON_SIZE = 40;

const points = [
  {
    icon: <Image src="/icons/email-v.png" width={POINT_ICON_SIZE} height={POINT_ICON_SIZE} alt="100" />,
    title: "100+",
    completed: "Project",
    circleColor: "#47296D",
  },
  {
    icon: <Image src="/icons/clock-v.png" width={POINT_ICON_SIZE} height={POINT_ICON_SIZE} alt="100" />,
    title: "04+",
    completed: "Years Experience",
    circleColor: "#A24C28",
  },
  {
    icon: <Image src="/icons/user-v.png" width={POINT_ICON_SIZE} height={POINT_ICON_SIZE} alt="100" />,
    title: "250+",
    completed: "Clients",
    circleColor: "#47296D",
  },
];

const services = [
  {
    icon: <Image src="/icons/blockchain.png" width={70} height={70} alt="100" />,
    title: "Blockchain Development",
    description: "We create shared, unchangeable, distributed ledger technology (DLT) that securely records transactions and tracks assets within a network.",
  },
  {
    icon: <Image src="/icons/website.png" width={70} height={70} alt="100" />,
    title: "Website Development",
    description: "We create simple, efficient, user friendly websites that guarantee a seamless user experience.",
  },
  {
    icon: <Image src="/icons/app.png" width={70} height={70} alt="100" />,
    title: "Mobile App Development",
    description: "We create simple, efficient, user friendly mobile applications that guarantee a seamless user experience.",
  },
];

export default function Home() {
  return (
    <Providers>
      <Box>
        <Hero />
        <Container maxW="container.xl">

          <Flex
            bgGradient={`linear(to-b, ${SECONDARY_COLOR}, #05113D00)`}
            pt={12}
            pb={10}
            rounded={'50px'}
            justifyContent={{
              base: 'center',
              md: 'space-evenly',
            }}
            alignItems={'center'}
            gap={{
              base: 5,
              md: 10,
            }}
            textAlign={'center'}
            wrap={'wrap'}
          >
            {
              points.map((point, index) => (
                <VStack key={index}>
                  <Circle
                    size="150px"
                    bgGradient={`linear(to-b, ${point.circleColor}, #05113D00)`}
                  >
                    <Circle size="125px" bg={SECONDARY_COLOR}>
                      {point.icon}
                    </Circle>
                  </Circle>

                  <Text fontSize={'1.3rem'} fontWeight={600}>
                    {point.title}
                    <br />
                    {point.completed}
                  </Text>
                </VStack>
              ))
            }
          </Flex>

          <Box
            py={"10rem"}
          >
            <Text
              fontSize={'2rem'}
              fontWeight={600}
              mb={10}
            >Services we offer</Text>

            <Flex
              justify={{
                base: 'space-between',
                md: 'space-evenly',
                sm: 'space-evenly',
              }}
              gap={{
                base: 10,
              }}
              wrap={'wrap'}
            >
              {
                services.map((service, index) => (
                  <VStack
                    key={index}
                    bg={TERTIARY_COLOR}
                    color={'black'}
                    fontWeight={500}
                    maxW={'370px'}
                    p={10}
                    textAlign={'center'}
                    rounded={'xl'}
                  >
                    {service.icon}
                    <Text
                      fontSize={'1.2rem'}
                      fontWeight={600}
                      mt={3}
                    >{service.title}</Text>
                    <Text>{service.description}</Text>
                  </VStack>
                ))
              }
            </Flex>
          </Box>
        </Container>

        <Footer />
      </Box>
    </Providers>
  );
}
