import {
  Box,
  Flex,
  Heading,
  Text,
  HStack,
  Image,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import { benefitCards } from "./Theory";

const Benefits = () => {
  return (
    <Box bg="white" p={{ base: "8", md: "12" }}>
      <Flex direction={{ base: "column", md: "row" }} mb={5}>
        <Box
          pt={2}
          px={{ base: "4", md: "12" }}
          w="100%"
          pb={{ base: "2", md: "8" }}
        >
          <Text fontSize="sm" my={3} letterSpacing="0.5px">
            – Benefits
          </Text>
          <Heading as="h2" size="lg" w="300px">
            What Makes Us the Preferred Choice?
          </Heading>
        </Box>

        <Box p={{ base: "2", md: "6" }} w="100%">
          <HStack>
            <Box
              h={{ base: "65px", md: "58px", xl: "45px" }}
              w="7px"
              bg="teal"
            />
            <Text fontSize="sm" py={{ base: "2", md: "8" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
              soluta blanditiis animi laborum dolore nemo qui libero placeat
              itaque.
            </Text>
          </HStack>
        </Box>
      </Flex>

      <Flex
        direction={{ base: "column", md: "row" }}
        mb={8}
        py={4}
        px={{ base: "0", md: "10" }}
      >
        <SimpleGrid
          spacing={5}
          templateColumns={{
            base: "repeat(auto-fill, minmax(280px, 1fr))",
            md: "repeat(auto-fill, minmax(225px, 1fr))",
          }}
          width="100%"
        >
          {benefitCards.map((b) => (
            <Card
              key={b.id}
              bg="purple.100"
              px={2}
              shadow="md"
              transition="transform 0.2s, box-shadow 0.2s"
              _hover={{
                transform: "scale(1.05)",
                boxShadow: "lg",
              }}
            >
              <CardHeader pb={3}>
                <Image
                  boxSize="50px"
                  objectFit="cover"
                  src={b.photo}
                  alt="card-image"
                  borderRadius="xl"
                />
              </CardHeader>
              <CardBody>
                <Heading size="md" mb={3}>
                  {b.title}
                </Heading>
                <Text fontSize="xs">{b.content}</Text>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Flex>
    </Box>
  );
};

export default Benefits;
