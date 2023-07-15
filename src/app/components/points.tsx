import { Circle, Flex, Text, VStack } from '@chakra-ui/react'
import Image from "next/image";
import { SECONDARY_COLOR } from "@/constant";


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

export function Points() {
  return (
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
  )
}