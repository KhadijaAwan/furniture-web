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
  Badge,
} from "@chakra-ui/react";
import { blogsCards } from "../components/Theory";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";

const Blogs = () => {
  return (
    <Box bg="gray.50" p={{ base: "8", md: "12" }}>
      <Flex direction={{ base: "column", md: "row" }} mb={5}>
        <Box
          pt={2}
          px={{ base: "1", md: "12" }}
          w="100%"
          pb={{ base: "2", md: "8" }}
        >
          <Text fontSize="sm" my={3} letterSpacing="0.5px">
            – Blogs & News
          </Text>
          <Heading as="h2" size="lg" w="300px">
            Our Latest Blogs & News
          </Heading>
        </Box>

        <Box p={{ base: "2", md: "6" }} w="100%">
          <HStack>
            <Box
              h={{ base: "65px", md: "58px", xl: "45px" }}
              w="7px"
              bg="teal"
            />
            <Text fontSize="sm" py={8}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
              soluta blanditiis animi laborum dolore nemo qui libero placeat
              itaque.
            </Text>
          </HStack>
        </Box>
      </Flex>

      <Flex direction="column" mb={8}>
        <SimpleGrid
          spacing={5}
          templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        >
          {blogsCards.map((b) => (
            <Card
              key={b.id}
              px={2}
              shadow="md"
              transition="transform 0.2s, box-shadow 0.2s"
              _hover={{
                transform: "scale(1.05)",
                boxShadow: "lg",
              }}
            >
              <CardHeader pb={1}>
                <Image
                  width="100%"
                  height="200px"
                  objectFit="cover"
                  src={b.photo}
                  alt="card-image"
                  borderRadius="xl"
                />
              </CardHeader>
              <CardBody px={8}>
                <Badge
                  py={1}
                  px={3}
                  borderRadius="lg"
                  textTransform="capitalize"
                >
                  {b.name}
                </Badge>
                <Heading
                  size="sm"
                  my={4}
                  lineHeight="1.5"
                  letterSpacing="0.5px"
                >
                  {b.title}
                </Heading>
                <Flex direction="row" mt={2}>
                  <IoPersonOutline size={17} color="Black" />
                  <Text fontSize="xs" ml={1.5} mr={4}>
                    {b.role}
                  </Text>
                  <MdOutlineCalendarMonth size={17} color="Black" />
                  <Text fontSize="xs" ml={1.5}>
                    {b.date}
                  </Text>
                </Flex>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Flex>
    </Box>
  );
};

export default Blogs;
