import {
  Box,
  Heading,
  Text,
  Stack,
  Image,
  SimpleGrid,
  Center,
} from "@chakra-ui/react";
import { followPhotos } from "../components/Theory";

const FollowUs = () => {
  return (
    <Box bg="white" px={{ base: "8", lg: "12" }} py={6}>
      <Center>
        <Stack>
          <Text fontSize="sm" my={3} letterSpacing="0.5px" mx="auto">
            – Follow Us
          </Text>
          <Heading
            as="h2"
            size="lg"
            w="300px"
            textAlign="center"
            lineHeight="1.5"
          >
            Follow for Update & Exclusive Offers!
          </Heading>
        </Stack>
      </Center>

      <SimpleGrid
        spacing={5}
        templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        width="full"
        my={8}
        bg="gray.100"
        rounded="xl"
        py={8}
        px={4}
      >
        {followPhotos.map((f) => (
          <Box key={f.id}>
            <Image
              width="full"
              height="200px"
              objectFit="cover"
              src={f.photo}
              alt="card-image"
              borderRadius="xl"
            />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default FollowUs;
