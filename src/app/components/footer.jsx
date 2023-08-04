import { MAIN_COLOR, QUATERNARY_COLOR, TERTIARY_COLOR } from "@/constant";
import { Box, Container, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box bg={TERTIARY_COLOR} color={'black'} p={3}>

      <Container maxW="container.xl" centerContent>

        <Box p="4" py={8} fontWeight={600}>

          <Heading textAlign="center" size="lg" fontWeight="bold" mb={12}>
            Have a project in mind?
          </Heading>

          <Box mb={14}>
            <Text textAlign="center" fontSize="xl" color={MAIN_COLOR} mb={4}>
              Reach out to us
            </Text>

            <VStack spacing="2" mt="3">
              <HStack spacing="4">
                <Text>Email: </Text>
                <Text color={QUATERNARY_COLOR}>
                  <a href="mailto:futurebuildersagency@gmail.com">futurebuildersagency@gmail.com</a>
                </Text>
              </HStack>

              <HStack spacing="4">
                <Text>Phone: </Text>
                <Text color={QUATERNARY_COLOR}>
                  <a href="tel:+2349018429887">+234 901 842 9887</a>
                </Text>
              </HStack>
            </VStack>
          </Box>

          <Box>
            <Text textAlign="center" fontSize="xl" color={MAIN_COLOR} mb={4}>
              Follow Us
            </Text>

            <HStack spacing="4" justify={'center'}>

              <Text color={QUATERNARY_COLOR}><a href="#">
                <Image alt='Login Image' src="/icons/linkedin.png" /></a>
              </Text>
              <Text color={QUATERNARY_COLOR}><a href="#">
                <Image alt='Login Image' src="/icons/twitter.png" /></a>
              </Text>
              <Text color={QUATERNARY_COLOR}><a href="#">
                <Image alt='Login Image' src="/icons/facebook.png" /></a>
              </Text>
            </HStack>
          </Box>
        </Box>

      </Container>

      <HStack
        mt={10}
      >
        <Text
          fontSize="sm"
        >
          ©{new Date().getFullYear()} - All copyrights reserved
        </Text>
      </HStack>

    </Box>
  );
}