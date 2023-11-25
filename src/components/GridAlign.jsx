import {
  Box,
  Heading,
  Text,
  Stack,
  Image,
  Icon,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";

const GridAlign = ({ photo, title, content, styles }) => {
  return (
    <Box
      position="relative"
      shadow="md"
      transition="transform 0.2s, box-shadow 0.2s"
      _hover={{
        transform: "scale(1.05)",
        boxShadow: "lg",
      }}
    >
      <Image
        width="full"
        height={{ base: "250px", lg: styles ? styles : "250px" }}
        objectFit="cover"
        src={photo}
        alt="card-image"
        borderRadius="xl"
      />
      <Stack
        spacing="3"
        position="absolute"
        top="62%"
        left="25px"
        zIndex={8}
        color="white"
        width="80%"
      >
        <HStack position="relative">
          <Heading size="md" mb={0} pb={0}>
            {title}
          </Heading>
          <Spacer />
          <Icon
            as={FiArrowUpRight}
            boxSize={9}
            position="absolute"
            right="0"
            bg="white"
            color="Black"
            borderRadius="full"
            p={1}
          />
        </HStack>
        <Text fontSize="md" mt={0}>
          {content}
        </Text>
      </Stack>
    </Box>
  );
};

export default GridAlign;
