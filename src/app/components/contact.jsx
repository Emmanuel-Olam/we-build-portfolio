import { MAIN_COLOR } from "@/constant";
import { Box, Button, Flex, FormControl, FormLabel, Heading, Image, Input, Textarea, VStack } from "@chakra-ui/react";
import { ButtonComponent } from "./button";
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";

export default function ContactUs() {

  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setIsLoading(true);
    emailjs.sendForm('service_o4w7tll', 'template_7j6y0pp', form.current, 'xzLo7o-FxzbVKK7lP')
      .then((result) => {
        setIsLoading(false);
      }, (error) => {
        setIsLoading(false);
      });
  };

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
            <form action="" method="post" onSubmit={sendEmail} ref={form}>

              <Heading fontSize="3rem" fontWeight="bold" mb={'4rem'}>
                Contact Us
              </Heading>

              <VStack spacing={12}>
                <FormControl>
                  <FormLabel color={MAIN_COLOR} fontWeight={'bold'} mb={4} fontSize={'1.1rem'}>Name:</FormLabel>
                  <Input
                    type='name'
                    name="user_name"
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
                    name="user_email"
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
                    name="message"
                    px={'3px'}
                    _focus={{
                      borderColor: MAIN_COLOR,
                      boxShadow: 'none'
                    }}
                    h={'200px'}
                  />
                </FormControl>
              </VStack>

              <ButtonComponent
              type='submit' bg={MAIN_COLOR} color={'white'} mt={'5rem'}
              isLoading={isLoading}
              loadingText="Sending"
              >
                Send message
              </ButtonComponent>

            </form>
          </Box>

        </Flex>
      </Flex>

    </Box>
  );
}