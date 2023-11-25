import {
  Box,
  Flex,
  Spacer,
  IconButton,
  useDisclosure,
  Button,
  Collapse,
  Text,
  Image,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SearchIcon } from "@chakra-ui/icons";
import { FaShoppingCart } from "react-icons/fa";
import { webImage } from "../assets/export";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      bg="Black"
      py={4}
      pl={{ base: "10", md: "24" }}
      pr={4}
      position="relative"
    >
      <Flex
        alignItems="center"
        justifyContent={{ base: "space-between", md: "flex-start" }}
      >
        <Image src={webImage} alt="Logo" boxSize={10} mr={4} />
        <Text
          fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
          fontWeight="bold"
          color="White"
        >
          Furniture
        </Text>
        <Spacer />
        <Box display={{ base: "block", md: "none" }}>
          <IconButton
            aria-label="Toggle Menu"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={onToggle}
          />
          <Collapse in={isOpen} placement="right">
            <Flex
              direction="column"
              position="absolute"
              top="98%"
              right="5px"
              h="190px"
              bg="white"
              p={5}
              boxShadow="md"
              borderRadius="md"
            >
              <ChakraLink
                as={ReactRouterLink}
                to="/furniture-web/"
                color="teal"
                textAlign="center"
                variant="ghost"
                mb={2}
                borderRadius="lg"
                w="120px"
                py={1}
                px={5}
                fontWeight="bold"
                _hover={{
                  textUnderlineOffset: "none",
                  color: "white",
                  bg: "teal",
                }}
              >
                Home
              </ChakraLink>
              <ChakraLink
                as={ReactRouterLink}
                to="/furniture-web/about"
                color="teal"
                textAlign="center"
                variant="ghost"
                mb={2}
                borderRadius="lg"
                w="120px"
                py={1}
                px={5}
                fontWeight="bold"
                _hover={{
                  textUnderlineOffset: "none",
                  color: "white",
                  bg: "teal",
                }}
              >
                About
              </ChakraLink>
              <ChakraLink
                as={ReactRouterLink}
                to="/furniture-web/products"
                color="teal"
                textAlign="center"
                variant="ghost"
                mb={2}
                borderRadius="lg"
                w="120px"
                py={1}
                px={5}
                fontWeight="bold"
                _hover={{
                  textUnderlineOffset: "none",
                  color: "white",
                  bg: "teal",
                }}
              >
                Products
              </ChakraLink>
              <ChakraLink
                as={ReactRouterLink}
                to="/furniture-web/contact"
                color="teal"
                textAlign="center"
                variant="ghost"
                mb={2}
                borderRadius="lg"
                w="120px"
                py={1}
                px={5}
                fontWeight="bold"
                _hover={{
                  textUnderlineOffset: "none",
                  color: "white",
                  bg: "teal",
                }}
              >
                Contact
              </ChakraLink>
            </Flex>
          </Collapse>
        </Box>

        <Box display={{ base: "none", md: "block" }}>
          <ChakraLink
            as={ReactRouterLink}
            to="/furniture-web/"
            color="gray.300"
            textAlign="center"
            variant="ghost"
            mb={2}
            borderRadius="lg"
            w="120px"
            py={2}
            px={5}
            fontWeight="bold"
            _hover={{
              textUnderlineOffset: "none",
              color: "white",
              bg: "teal",
            }}
          >
            Home
          </ChakraLink>
          <ChakraLink
            as={ReactRouterLink}
            to="/furniture-web/about"
            color="gray.300"
            textAlign="center"
            variant="ghost"
            mb={2}
            borderRadius="lg"
            w="120px"
            py={2}
            px={5}
            fontWeight="bold"
            _hover={{
              textUnderlineOffset: "none",
              color: "white",
              bg: "teal",
            }}
          >
            About
          </ChakraLink>
          <ChakraLink
            as={ReactRouterLink}
            to="/furniture-web/products"
            color="gray.300"
            textAlign="center"
            variant="ghost"
            mb={2}
            borderRadius="lg"
            w="120px"
            py={2}
            px={5}
            fontWeight="bold"
            _hover={{
              textUnderlineOffset: "none",
              color: "white",
              bg: "teal",
            }}
          >
            Products
          </ChakraLink>
          <ChakraLink
            as={ReactRouterLink}
            to="/furniture-web/contact"
            color="gray.300"
            textAlign="center"
            variant="ghost"
            mb={2}
            borderRadius="lg"
            w="120px"
            py={2}
            px={5}
            fontWeight="bold"
            _hover={{
              textUnderlineOffset: "none",
              color: "white",
              bg: "teal",
            }}
          >
            Contact
          </ChakraLink>
          <IconButton
            aria-label="Search database"
            colorScheme="Black"
            icon={<SearchIcon />}
          />
          <IconButton
            aria-label="Shopping Cart"
            colorScheme="Black"
            icon={<FaShoppingCart />}
            mr={8}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
