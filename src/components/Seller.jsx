import {
  Box,
  Flex,
  Heading,
  Text,
  HStack,
  Button,
  Center,
} from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";
import TabsSection from "./TabsSection";

const Seller = () => {
  return (
    <Box bg="white" p={{ base: "8", md: "12" }}>
      <Flex direction={{ base: "column", md: "row" }} mb={5}>
        <Box
          pt={2}
          px={{ base: "1", lg: "12" }}
          w="100%"
          pb={{ base: "2", md: "8" }}
        >
          <Text fontSize="sm" my={3} letterSpacing="0.5px">
            – Best Seller
          </Text>
          <Heading as="h2" size="lg" w="300px">
            Our Best Seller Products
          </Heading>
        </Box>

        <Box p={{ base: "2", md: "6" }} w="100%">
          <HStack mx={{ base: "auto", lg: "0" }}>
            <Box
              h={{ base: "65px", md: "58px", xl: "45px" }}
              w="7px"
              bg="teal"
            />
            <Text fontSize="sm" py={8} w={{ base: "300px", lg: "450px" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
              soluta blanditiis animi laborum dolore nemo qui libero placeat
              itaque.
            </Text>
          </HStack>
        </Box>
      </Flex>

      <TabsSection />

      <Center>
        <Button
          borderRadius="xl"
          letterSpacing={1}
          my={6}
          px={6}
          py={6}
          fontSize="md"
          bg="Black"
          color="white"
          rightIcon={<FiArrowUpRight size="25px" />}
          _hover={{ bg: "teal" }}
        >
          View All Collection
        </Button>
      </Center>
    </Box>
  );
};

export default Seller;
