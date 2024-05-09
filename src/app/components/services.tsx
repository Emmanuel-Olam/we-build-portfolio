import { Box, Flex, Text, VStack } from '@chakra-ui/react'
import Image from "next/image";
import { TERTIARY_COLOR } from '@/constant';

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

export function Services() {
  return (
    <Box
      py={"4rem"}
      pt={'8rem'}
    >
      <Text data-aos="fade-left"  className='overflow-hidden '
        fontSize={'2rem'}
        fontWeight={600}
        mb={10}
        textAlign={{
          base: 'center',
          md: 'left',
        }}
      >Services we offer</Text>

      <Flex
        justify={{
          base: 'center',
          md: 'space-evenly',
        }}
        gap={{
          base: 10,
        }}
        wrap={'wrap'}
      >
        {
          services.map((service, index) => (
            <VStack data-aos="fade-right" className='overflow-hidden'
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
  )
}