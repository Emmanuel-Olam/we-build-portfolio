"use client";
import { MAIN_COLOR } from '@/constant';
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';

export default function Hero() {
  return (
    <Stack direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text color={'white'} as={'span'}>
              ABDULKAREEM O.
            </Text>
          </Heading>
          <Text>
          Blockchain/ Web Developer
          </Text>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'white'}>
            {`I help build decentralized applications and smart contracts based on blockchain technology. As well as Web  & Mobile App Development`}
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'md'}
              size={'lg'}
              bg={MAIN_COLOR}
              color={'white'}
              _hover={{
                bg: MAIN_COLOR,
              }}>
              {"Let's Talk"}
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image alt='Login Image' src="/hero.png" />
      </Flex>
    </Stack>
  );
}