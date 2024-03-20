"use client";

import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function SplitScreen() {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "blue.400",
                zIndex: -1,
              }}
            >
              G# FIVE
            </Text>
            <br />{" "}
            <Text color={"blue.400"} as={"span"}>
              MotorPH Payroll System
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            A comprehensive and user-friendly solution developed to manage the
            payroll of MotorPH.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
              onClick={() =>
                window.open(
                  "https://github.com/granulatedsugar/MotorPH-Enterprise-System",
                  "_blank"
                )
              }
            >
              Source Code
            </Button>
            <Button
              rounded={"full"}
              onClick={() =>
                window.open(
                  "https://github.com/granulatedsugar/MotorPH-Enterprise-System",
                  "_blank"
                )
              }
            >
              How It Works
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"contain"}
          src={"https://minimals.cc/assets/images/home/zone_landing.webp"}
        />
      </Flex>
    </Stack>
  );
}
