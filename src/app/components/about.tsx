import { Box, Flex, Text, VStack } from '@chakra-ui/react'
import Image from "next/image";
import { TERTIARY_COLOR } from '@/constant';


export function AboutUs() {
  return (
    <Box
      py={"8rem"}
      id='about'
    >

      <Flex
        justify={{
          base: 'space-evenly',
        }}
        gap={{
          base: "5rem",
          md: "2rem",
        }}
        wrap={'wrap'}
        align={'center'}
      >

        <Box
          position={'relative'}
          minW={{
            base: '100%',
            sm: '500px',
          }}
          maxW={{
            base: '100%',
            sm: '500px',
          }}
          display={{
            base: 'flex',
            sm: 'block',
          }}
          flexWrap={'wrap'}
          alignContent={'center'}
          justifyContent={'center'}
        >
          <Box
            position={{
              base: 'relative',
              sm: 'absolute',
            }}
            top={{
              base: '0',
              sm: '-100px',
            }}
            right={0}
            minW={'370px'}
          >
            <Image
              src="/about/1.png"
              width={370}
              height={370}
              alt="100"
            />
          </Box>
          <Image src="/about/2.png" width={370} height={370} alt="100" />
        </Box>

        <VStack
          fontWeight={500}
          maxW={'470px'}
          textAlign={'center'}
        >
          <Text
            fontSize={'2rem'}
            fontWeight={600}
            mb={5}
          >About Our Team</Text>
          <Text
            mb={5}
          >
            We are a dynamic group of highly skilled professionals passionate about creating exceptional digital experiences. With a deep understanding of the latest web technologies and trends, we strive to deliver innovative and cutting-edge solutions that drive business growth and exceed client expectations.
          </Text>
          <Text>
            Our team is comprised of talented individuals from diverse backgrounds, including front-end and back-end developers, UX/UI designers, project managers, and quality assurance specialists. We foster a collaborative environment that encourages creativity, open communication, and continuous learning.
          </Text>
        </VStack>
      </Flex>

    </Box>
  )
}