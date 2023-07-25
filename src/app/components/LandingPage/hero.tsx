"use client";
import { MAIN_COLOR } from '@/constant';
import {
  Box,
  Button,
  Circle,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';

export default function Hero() {
  return (
    <Box position={'relative'}

      overflow={'hidden'}
    >
      <Container maxW="container.xl">
        <Stack
          direction={{ base: 'column', md: 'row' }}
          gap={{
            base: 10,
            md: 20,
            sm: 20,
          }}
          pt={6}
        >
          <Flex
            flex={1}
            align={'center'}
            justify={{
              base: 'start',
              md: 'start',
              sm: 'center',
            }}
            textAlign={{
              base: 'center',
              md: 'left',
              lg: 'left',
              xl: 'left',
            }}
          >
            <Stack spacing={6} w={'full'} maxW={'lg'}>
              <Heading fontSize={{ base: '4xl', lg: '5xl' }}>
                <Text color={'white'} as={'span'}>
                  ABDULKAREEM O.
                </Text>
              </Heading>
              <Text fontSize={20}>
                Blockchain/ Web Developer
              </Text>
              <Text
                maxW={'420px'}
                color={'white'}
                margin={{
                  md: '0',
                  sm: 'auto',
                }}
              >
                {`We help build decentralized applications and smart contracts based on blockchain technology. As well as Web  & Mobile App Development`}
              </Text>
              <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>

                <Link href="#contact"><Button
                  rounded={'md'}
                  size={'lg'}
                  bg={MAIN_COLOR}
                  color={'white'}
                  w={{
                    base: 'full',
                    md: 'auto',
                    sm: '300px'
                  }}
                  margin={{
                    md: '0',
                    sm: 'auto',
                  }}
                  _hover={{
                    bg: MAIN_COLOR,
                  }}>{"Let's Talk"}</Button></Link>

              </Stack>
            </Stack>
          </Flex>
          <Flex
            flex={1}
            position={'relative'}
            align={'center'}
            justify={'center'}
          >
            <Circle
              size='400px'
              bg={MAIN_COLOR}
              position={'absolute'}
              zIndex={1}
              top={'19%'}
              left={'50%'}
              transform={'translateX(-50%)'}
            ></Circle>
            <Image
              alt='Login Image' src="/hero.png"
              position={'relative'}
              zIndex={2}
            />
          </Flex>
        </Stack>
      </Container>

      <VStack
        position={'absolute'}
        bottom={"50%"}
        right={{
          base: "10px",
          md: "20px",
          lg: "50px",
          xl: "50px",
        }}
        spacing={5}
        align={'center'}
        transform={"translateY(50%)"}
        zIndex={3}
      >
        <Link
          href='#'
          opacity={0.8}
          _hover={{
            opacity: 1,
            transform: 'scale(1.1)',
          }}
        >
          <Image alt='Login Image' src="/icons/linkedin.png" />
        </Link>
        <Link
          href='#'
          opacity={0.8}
          _hover={{
            opacity: 1,
            transform: 'scale(1.1)',
          }}
        >
          <Image alt='Login Image' src="/icons/twitter.png" />
        </Link>
        <Link
          href='#'
          opacity={0.8}
          _hover={{
            opacity: 1,
            transform: 'scale(1.1)',
          }}
        >
          <Image alt='Login Image' src="/icons/facebook.png" />
        </Link>
      </VStack>
    </Box>
  );
}