import {
  Box,
  Heading,
  Text,
  Stack,
  Button,
  Center,
  Input,
  InputLeftElement,
  InputGroup,
  Flex,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";

const Subscribe = () => {
  return (
    <Box bg="gray.200" px={12} py={16}>
      <Center>
        <Stack>
          <Text fontSize="sm" my={3} letterSpacing="0.5px" mx="auto">
            – Our Newsletter
          </Text>
          <Heading
            as="h2"
            size="lg"
            w={{ base: "300px", md: "600px" }}
            textAlign="center"
            lineHeight="1.5"
          >
            Subscribe to Our Newsletter to Get Updates to Our Latest Furniture
          </Heading>
          <Text
            fontSize="xs"
            my={3}
            letterSpacing="0.5px"
            w={{ base: "280px", md: "400px" }}
            textAlign={{ base: "center", md: "start" }}
            mx="auto"
          >
            Get 20% off on your first order just by subscribing to our
            newsletter
          </Text>
        </Stack>
      </Center>

      {/* The Email Input Section */}
      <Flex
        my={4}
        w={{ base: "270px", lg: "420px" }}
        mx="auto"
        direction={{ base: "column", lg: "row" }}
      >
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            mx={2}
            bg="gray.200"
            borderRadius="full"
            my={1.5}
          >
            <EmailIcon color="teal" size="lg" />
          </InputLeftElement>
          <Input
            type="email"
            placeholder="Enter Email Address"
            borderRadius="full"
            size="sm"
            py={6}
            pl={14}
            w="300px"
            bg="white"
          />
        </InputGroup>
        <Button
          colorScheme="teal"
          borderRadius="full"
          letterSpacing={1.5}
          my={{ base: "6", lg: "1.5" }}
          mx={{ base: "auto", lg: "1.5" }}
          px={6}
          py={2}
          fontSize="sm"
          w={{ base: "120px", lg: "200px" }}
        >
          Subscribe
        </Button>
      </Flex>
    </Box>
  );
};

export default Subscribe;
