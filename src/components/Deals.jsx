import {
  Box,
  Heading,
  Text,
  Flex,
  Button,
  Image,
  Card,
  CardBody,
  CardHeader,
  Badge,
  Center,
  Stack,
} from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { deals } from "./Theory";
import { AiFillStar } from "react-icons/ai";

const Deals = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 2500 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 2500, min: 1200 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1200, min: 760 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 760, min: 0 },
      items: 1,
    },
  };

  return (
    <Box bg="gray.50" p={{ base: "5", lg: "12" }}>
      <Box
        pt={2}
        px={{ base: "1", md: "12" }}
        w="100%"
        pb={{ base: "2", md: "8" }}
        mb={{ base: "6", lg: "0" }}
        textAlign={{ base: "center", lg: "start" }}
      >
        <Text
          fontSize="sm"
          my={3}
          letterSpacing="0.5px"
          color="gray"
          fontWeight="semibold"
        >
          – Today Deals
        </Text>
        <Heading
          as="h2"
          size="lg"
          w={{ base: "300px", md: "400px" }}
          mx={{ base: "auto", lg: "0" }}
        >
          Unmissable Daily Deals Await: Shop Now and Save!
        </Heading>
      </Box>

      <Box
        position="relative"
        py={14}
        px={{ base: "0", lg: "16" }}
        width="100%"
      >
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          transitionDuration={500}
          className="alignment"
        >
          {deals.map((d) => (
            <Box>
              <Card
                maxW="350px"
                key={d.id}
                overflow="hidden"
                variant="outline"
                mx={{ base: "auto", md: "30px" }}
                bg="gray.200"
                shadow="md"
                transition="transform 0.2s, box-shadow 0.2s"
                _hover={{
                  transform: "scale(1.05)",
                  boxShadow: "lg",
                }}
              >
                <Stack w="100%" p={0}>
                  <CardBody textAlign={{ base: "center", md: "start" }}>
                    <Image
                      objectFit="cover"
                      src={d.photo}
                      alt="deal-image"
                      w="300px"
                      h="160px"
                      borderRadius="lg"
                      mb={2}
                    />
                    <Heading size="md" mt={3}>
                      {d.title}
                    </Heading>
                    <Heading size="sm" my={3}>
                      {d.cost}
                    </Heading>
                    <Flex justifyContent={{ base: "center", md: "flex-start" }}>
                      <AiFillStar size={20} color="#F6AD55" />
                      <Text size="xs" mr={1.5}>
                        {d.rating}
                      </Text>
                      <Badge
                        py={1}
                        px={3}
                        borderRadius="lg"
                        textTransform="capitalize"
                      >
                        {d.reviews}
                      </Badge>
                    </Flex>
                    <Text py="3" fontSize="xs" textAlign="start">
                      {d.content}
                    </Text>
                    <Button
                      colorScheme="teal"
                      letterSpacing={1}
                      px={4}
                      fontSize="sm"
                      fontWeight="medium"
                      my={3}
                    >
                      Buy Now
                    </Button>
                  </CardBody>
                </Stack>
              </Card>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default Deals;
