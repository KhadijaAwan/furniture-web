import { Box, Center, Stack, Text, Link } from "@chakra-ui/react";

const Support = () => {
  return (
    <Box bg="White" p={4}>
      <Stack
        spacing={8}
        direction={{ base: "column", md: "row" }}
        align={{ base: "center", md: "stretch" }}
      >
        <Text
          fontSize="sm"
          textAlign="left"
          px={20}
          display={{ base: "none", md: "block" }}
        >
          Support (406) 555-0120
        </Text>
        <Center>
          <Text fontSize="sm">
            Sign up and
            <Text textTransform="uppercase" as="b" mx={2}>
              Get 20% off
            </Text>
            for your first order.
            <Link color="teal.500" href="#" mx={2} as="b">
              Sign up now
            </Link>
          </Text>
        </Center>
      </Stack>
    </Box>
  );
};

export default Support;
