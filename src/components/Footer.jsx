import {
  Box,
  Flex,
  Heading,
  Text,
  List,
  ListItem,
  Spacer,
  Stack,
  HStack,
  Image,
} from "@chakra-ui/react";
import {
  footerLeftLinks,
  footerRightLinks,
  socialMedia,
} from "../components/Theory";
import { webImage } from "../assets/export";

const Footer = () => {
  return (
    <Box bg="Black" px={{ base: "4", lg: "12" }} py={10}>
      <Flex direction={{ base: "column", lg: "row" }} px={10}>
        <Box w={{ base: "100%", lg: "45%" }} p={{ base: "0", lg: "4" }}>
          <Stack>
            <HStack pt={4} mx={{ base: "auto", lg: "0" }}>
              <Image src={webImage} alt="Logo" boxSize={10} mr={2} />
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="bold"
                color="White"
              >
                Furniture
              </Text>
            </HStack>
            <Text
              fontSize="xs"
              color="gray"
              w={{ base: "280px", md: "400px" }}
              my={4}
              mx={{ base: "auto", lg: "0" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborio
              nobis iste fuga est illo facilis quisquam exercitationem ex
              asperiores, tenetur possimus ratione deserunt.
            </Text>

            <HStack mx={{ base: "auto", lg: "0" }}>
              {socialMedia.map((social) => (
                <Image
                  key={social.id}
                  src={social.icon}
                  alt={social.id}
                  boxSize={5}
                  mr={1.5}
                  onClick={() => window.open(social.link)}
                  borderRadius="full"
                />
              ))}
            </HStack>
          </Stack>
        </Box>

        {/* The right Footer Links Section */}
        <Box w={{ base: "100%", lg: "55%" }} p={4}>
          <Flex direction={{ base: "column", md: "row" }}>
            {/* Footer Left Link */}
            <Flex
              direction="row"
              px={3}
              w={{ base: "100%", lg: "50%" }}
              justifyContent="center"
            >
              {footerLeftLinks.map((footerLeft) => (
                <Box px={6} key={footerLeft.title}>
                  <Heading
                    color="white"
                    size="sm"
                    my={4}
                    lineHeight="1.5"
                    letterSpacing="0.5px"
                  >
                    {footerLeft.title}
                  </Heading>
                  <List spacing={3}>
                    {footerLeft.links.map((link, index) => (
                      <ListItem key={link.name} fontSize="xs" color="gray">
                        {link.name}
                      </ListItem>
                    ))}
                  </List>
                </Box>
              ))}
            </Flex>

            {/* Footer Right Link */}
            <Flex
              direction="row"
              px={3}
              py={{ base: "4", md: "0" }}
              w={{ base: "100%", lg: "50%" }}
              justifyContent="center"
            >
              {footerRightLinks.map((footerRight) => (
                <Box px={6} key={footerRight.title}>
                  <Heading
                    color="white"
                    size="sm"
                    my={4}
                    lineHeight="1.5"
                    letterSpacing="0.5px"
                  >
                    {footerRight.title}
                  </Heading>
                  <List spacing={3}>
                    {footerRight.links.map((link, index) => (
                      <ListItem key={link.name} fontSize="xs" color="gray">
                        {link.name}
                      </ListItem>
                    ))}
                  </List>
                </Box>
              ))}
            </Flex>
          </Flex>
        </Box>
      </Flex>

      <Box bg="gray.900" width="95%" h="0.5px" mx="auto" mb={4} mt={10}></Box>

      <Flex direction={{ base: "column", lg: "row" }} px={10} color="white">
        <Text fontSize="sm" my={3} letterSpacing="0.5px" textAlign="center">
          Copyright &copy; 2023 Furnituredot. All Rights Reserved.
        </Text>
        <Spacer />
        <Text fontSize="sm" my={3} letterSpacing="0.5px" textAlign="center">
          User Terms & Conditions | Privacy Policy
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
