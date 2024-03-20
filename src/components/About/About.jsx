import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  Flex,
  Image,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

// Replace test data with your own
const features = [
  {
    id: 1,
    title: "Dashboard",
    text: "Number of employees, Total products, Payroll expenses, Employee status breakdown, Expense breakdown.",
  },
  {
    id: 2,
    title: "Employee Management",
    text: "Employee module consists of two functions: Employee Details, Add/Update Employees.",
  },
  {
    id: 3,
    title: "Attendance Management",
    text: "Time in/ Time out, Manage Attendance (Log), Manage Leave, Leave Request",
  },
  {
    id: 4,
    title: "Payroll System",
    text: "Payslip Creation, Salary Calculation, Tax Deductions, and Allowance Calculation.",
  },
  {
    id: 5,
    title: "Administration",
    text: "Users, User Roles, Position, Department.",
  },
  {
    id: 6,
    title: "User Based Access",
    text: "User access is based on the roles assigned.",
  },
];

export default function GridListWithHeading() {
  return (
    <Box p={4} pt={20} pb={20} color={"gray.800"}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>MotorPH Payroll System</Heading>
        <Text color={"gray.500"} fontSize={"xl"}>
          A comprehensive and user-friendly solution developed to manage the
          payroll of MotorPH. This system is designed to streamline the payroll
          process and make it more efficient, accurate and secure. It enables
          the company to easily track employee salaries, work hours, deductions,
          and other compensation related information.
        </Text>
      </Stack>
      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={"top"}>
              <Box color={"green.500"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={"gray.500"}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
