import {
  Box,
  Flex,
  Image,
  Center,
  Card,
  CardBody,
  Heading,
  Button,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import { image1, image2, imageCorner } from "../assets/export";

const Gallery = () => {
  return (
    <Box bg="white" width="100%" p={4}>
      <SimpleGrid
        spacing={5}
        templateColumns={{
          base: "repeat(auto-fill, minmax(300px, 1fr))",
          lg: "repeat(auto-fill, minmax(450px, 1fr))",
          xl: "repeat(auto-fill, minmax(500px, 1fr))",
        }}
        my={8}
        rounded="xl"
        py={8}
        px={4}
        mx="auto"
        width="100%"
      >
        <Box width="100%" p={4} mx="auto">
          <SimpleGrid
            spacing={5}
            templateColumns={{
              base: "repeat(auto-fill, minmax(100px, 1fr))",
              lg: "repeat(auto-fill, minmax(150px, 1fr))",
              xl: "repeat(auto-fill, minmax(250px, 1fr))",
            }}
            rounded="xl"
            px={1}
            width="100%"
          >
            <Image
              objectFit="cover"
              height="550px"
              src={image2}
              alt="card-image"
              borderRadius="xl"
            />
            <Image
              objectFit="cover"
              height="550px"
              src={image1}
              alt="card-image"
              borderRadius="xl"
            />
          </SimpleGrid>
        </Box>

        <Box
          mx="auto"
          rounded="xl"
          py={8}
          px={1}
          bgImage={imageCorner}
          bgRepeat="no-repeat"
          borderRadius="2xl"
          position="relative"
          width="100%"
        >
          <Box
            position="absolute"
            left="0"
            top="0"
            bg="Black"
            opacity={0.7}
            height="full"
            width="100%"
            borderRadius="2xl"
          ></Box>
          <Card align="start" bg="none" py={4}>
            <CardBody px={{ base: "2", lg: "5" }}>
              <Text
                fontSize="md"
                my={3}
                letterSpacing="0.5px"
                px={4}
                color="teal"
                fontWeight="bold"
              >
                – Offers
              </Text>
              <Heading
                color="white"
                as="h2"
                size="lg"
                width={{ base: "270px", lg: "300px" }}
                textAlign="center"
                lineHeight="1.5"
              >
                Get Upto 50% Offer On Festival Season!
              </Heading>
              <Text
                fontSize="sm"
                py={8}
                width={{ base: "280px", lg: "360px" }}
                px={3}
                color="gray.200"
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Debitis soluta blanditiis animi laborum dolore nemo qui libero
                placeat itaque.
              </Text>
              <Button
                mx={3}
                colorScheme="teal"
                borderRadius="full"
                letterSpacing={1.5}
                px={6}
                my={2}
              >
                Register Now
              </Button>
            </CardBody>
          </Card>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Gallery;
