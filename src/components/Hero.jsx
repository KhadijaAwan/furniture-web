import {
  Box,
  Flex,
  Stack,
  Text,
  Avatar,
  Heading,
  Button,
  IconButton,
  Card,
  CardBody,
  ButtonGroup,
  Center,
  Image,
} from "@chakra-ui/react";
import { FaPlayCircle } from "react-icons/fa";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { heroImage } from "../assets/export";
import { analysis, slidingImages } from "../components/Theory";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Hero = () => {
  return (
    <Box bg="#E2E8F0" pb={4} pt={14} px={{ base: "4", md: "16" }} zIndex={1}>
      <Flex direction={{ base: "column", lg: "row" }}>
        <Box p={5} w="100%">
          <Stack>
            <Flex
              alignContent="center"
              bg="white"
              p={2}
              borderRadius="full"
              w="280px"
              justifyContent={{ base: "center", md: "start" }}
            >
              <Avatar src={heroImage} w={8} h={8} />
              <Box ml="2" py={1}>
                <Text fontWeight="bold" fontSize="sm">
                  Award Winning Furniture Store
                </Text>
              </Box>
            </Flex>

            <Heading
              as="h2"
              size={{ base: "lg", md: "2xl" }}
              my={4}
              lineHeight="1.25"
              textAlign={{ base: "center", md: "start" }}
            >
              Make Your Interior Minimalist
              <Text
                as="span"
                color="teal"
                mx={3}
                textAlign={{ base: "center", md: "start" }}
              >
                &
              </Text>
              Modern
            </Heading>

            <Text fontSize="sm" mb={6}>
              Delivering Comfort as a Priority: Quick and Easy Access to a Wide
              variety of standard Furniture.
            </Text>

            <Box mb={6}>
              <ButtonGroup spacing="2">
                <Button
                  colorScheme="teal"
                  borderRadius="full"
                  letterSpacing={1.5}
                  px={6}
                  fontSize="sm"
                >
                  Get Started
                </Button>

                <Button
                  leftIcon={<FaPlayCircle />}
                  colorScheme="teal"
                  variant="solid"
                  borderRadius="full"
                  letterSpacing={1.5}
                  fontSize="sm"
                >
                  Watch Video
                </Button>
              </ButtonGroup>
            </Box>

            <Flex direction="row" px={3}>
              {analysis.map((a) => (
                <Box key={a.id} mr={10}>
                  <Heading as="h2" size="lg">
                    {a.value}
                  </Heading>
                  <Text fontSize="sm" mb={6}>
                    {a.title}
                  </Text>
                </Box>
              ))}
            </Flex>
          </Stack>
        </Box>

        {/* right side section */}
        <Box p={4} w="100%">
          <Box
            pb={10}
            width={{ base: "300px", md: "370px" }}
            mx="auto"
            position="relative"
          >
            <Carousel
              width="full"
              autoPlay={true}
              infiniteLoop={true}
              showStatus={false}
              showThumbs={false}
              showIndicators={false}
              renderArrowPrev={(onClickHandler, hasPrev) =>
                hasPrev && (
                  <IconButton
                    onClick={onClickHandler}
                    left="35%"
                    position="absolute"
                    bottom={0}
                    zIndex={10}
                    colorScheme="teal"
                    aria-label="left_arrow"
                    size="md"
                    borderRadius="full"
                    key="left"
                    icon={<ArrowLeftIcon />}
                  />
                )
              }
              renderArrowNext={(onClickHandler, hasNext) =>
                hasNext && (
                  <IconButton
                    key="right"
                    onClick={onClickHandler}
                    right="35%"
                    position="absolute"
                    bottom={0}
                    zIndex={10}
                    colorScheme="teal"
                    aria-label="right_arrow"
                    size="md"
                    borderRadius="full"
                    fontWeight="bold"
                    icon={<ArrowRightIcon />}
                  />
                )
              }
            >
              {slidingImages.map((s) => (
                <Card key={s.id}>
                  <CardBody borderRadius="xl">
                    <Image
                      src={s.photo}
                      alt="images"
                      borderRadius="xl"
                      w="250px"
                      h="220px"
                    />
                    <Stack mt="6" spacing="3">
                      <Heading size="md">{s.title}</Heading>
                      <Text fontSize="sm">{s.content}</Text>
                    </Stack>
                  </CardBody>
                  <Box bg="#E2E8F0" h="56px"></Box>
                </Card>
              ))}
            </Carousel>
          </Box>
        </Box>
      </Flex>

      <Center>
        <Button
          colorScheme="teal"
          borderTopRadius="3xl"
          borderBottomRadius="md"
          letterSpacing={1.5}
          my={6}
          px={6}
          py={6}
          fontSize="sm"
        >
          Explore Now
        </Button>
      </Center>
    </Box>
  );
};

export default Hero;
