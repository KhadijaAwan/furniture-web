import {
  Box,
  Card,
  SimpleGrid,
  CardHeader,
  Heading,
  Text,
  Button,
  CardBody,
  Image,
  Spacer,
  HStack,
} from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";

const Products = ({ product }) => {
  return (
    <Box mt={6} p={2} width="100%">
      <SimpleGrid
        spacing={5}
        templateColumns="repeat(auto-fill, minmax(210px, 1fr))"
        width="100%"
      >
        {product.map((c) => (
          <Card
            key={c.id}
            _hover={{
              transform: "scale(1.05)",
              boxShadow: "lg",
            }}
          >
            <CardHeader width="100%" p={0} m={0}>
              <Image
                objectFit="cover"
                width="100%"
                borderTopRadius="lg"
                src={c.photo}
                alt="Chair"
                height="200px"
              />
            </CardHeader>
            <CardBody bg="pink.50">
              <HStack>
                <Heading size="sm"> {c.title}</Heading>
                <Spacer />
                <Heading size="sm">{c.cost}</Heading>
              </HStack>
              <Text fontSize="xs" mt={1.5}>
                {c.content}
              </Text>
            </CardBody>
            <Button colorScheme="teal" borderTopRadius="none">
              Add to Cart
            </Button>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Products;
