import { MAIN_COLOR } from "@/constant";
import { Box, Button, Flex, FormControl, FormLabel, Heading, Image, Input, Textarea, VStack } from "@chakra-ui/react";
import { ButtonComponent } from "./button";

export default function ContactUs() {
  return (
    <Box id="contact" bg={'blackAlpha.700'}>

      <Flex
        alignItems={'stretch'}
        py={{
          base: '5rem',
          lg: '0'
        }}
      >
        <Box
          display={{
            base: 'none',
            lg: 'block'
          }}
          maxW={'900px'}
          flex={1}
        >
          <Image src="/contact.png" alt="Contact Us" maxH={'1000px'} width={'100%'} objectFit={'cover'} />
        </Box>

        <Flex
          p={10}
          w={'100%'}
          maxW={'500px'}
          display={'flex'}
          alignItems={'center'}
        >
          <Box
            flex={1}
          >
            <form action="" method="post" >

              <Heading fontSize="3rem" fontWeight="bold" mb={'4rem'}>
                Contact Us
              </Heading>

              <VStack spacing={12}>
                <FormControl>
                  <FormLabel color={MAIN_COLOR} fontWeight={'bold'} mb={4} fontSize={'1.1rem'}>Name:</FormLabel>
                  <Input
                    type='name'
                    placeholder="Enter your fullname"
                    border={'none'}
                    borderBottom={'1px solid #000'}
                    borderRadius={0}
                    borderColor={'gray.400'}
                    px={'3px'}
                    _focus={{
                      borderColor: MAIN_COLOR,
                      boxShadow: 'none'
                    }}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel color={MAIN_COLOR} fontWeight={'bold'} mb={4} fontSize={'1.1rem'}>Email:</FormLabel>
                  <Input
                    type='email'
                    placeholder="Enter your email"
                    border={'none'}
                    borderBottom={'1px solid #000'}
                    borderRadius={0}
                    borderColor={'gray.400'}
                    px={'3px'}
                    _focus={{
                      borderColor: MAIN_COLOR,
                      boxShadow: 'none'
                    }}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel color={MAIN_COLOR} fontWeight={'bold'} mb={4} fontSize={'1.1rem'}>Details:</FormLabel>
                  <Textarea
                    placeholder='Enter your project details'
                    border={'none'}
                    borderBottom={'1px solid #000'}
                    borderRadius={0}
                    borderColor={'gray.400'}
                    px={'3px'}
                    _focus={{
                      borderColor: MAIN_COLOR,
                      boxShadow: 'none'
                    }}
                    h={'200px'}
                  />
                </FormControl>
              </VStack>

              <ButtonComponent type='submit' bg={MAIN_COLOR} color={'white'} mt={'5rem'}>
                Send message
              </ButtonComponent>

            </form>
          </Box>

        </Flex>
      </Flex>

    </Box>
  );
}