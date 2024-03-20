"use client";

import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { BsPerson } from "react-icons/bs";
import { FiServer } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

interface StatsCardProps {
  title: string;
  stat: string;
  icon: ReactNode;
}

function StatsCard(props: StatsCardProps) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("white.800", "white.500")}
      rounded={"lg"}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={"auto"}
          color={useColorModeValue("white.800", "white.200")}
          alignContent={"center"}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function BasicStatistics() {
  return (
    <Box
      backgroundColor={"#161C24"}
      mx={"auto"}
      pt={20}
      pb={20}
      px={{ base: 2, sm: 12, md: 17 }}
    >
      <Box
        maxW={"7xl"}
        mx={"auto"}
        px={{ base: 2, sm: 12, md: 17 }}
        color={"white"}
      >
        <chakra.h1
          textAlign={"center"}
          fontSize={"4xl"}
          py={10}
          fontWeight={"bold"}
        >
          A little bit about MotorPH
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard
            title={"Employees"}
            stat={"35"}
            icon={<BsPerson size={"3em"} color="white" />}
          />
          <StatsCard
            title={"Products"}
            stat={"40"}
            icon={<FiServer size={"3em"} color="white" />}
          />
          <StatsCard
            title={"Stores Nationwide"}
            stat={"12"}
            icon={<GoLocation size={"3em"} color="white" />}
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
}
