import {
  Box,
  Heading,
  Text,
  Stack,
  Center,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { category1, category2, category3, category4 } from "../assets/export";
import GridAlign from "./GridAlign";

const Category = () => {
  return (
    <Box bg="gray.100" px={{ base: "0", md: "12" }} py={10}>
      <Center mb={5}>
        <Stack>
          <Text fontSize="sm" my={3} letterSpacing="0.5px" mx="auto">
            – Category
          </Text>
          <Heading
            as="h2"
            size="lg"
            w={{ base: "300px", md: "480px" }}
            textAlign="center"
            lineHeight="1.5"
          >
            Discover Our Unique Collection of Exclusive Categories.
          </Heading>
        </Stack>
      </Center>

      <Box my={14} px={8}>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <GridItem colSpan={{ base: 3, lg: 1 }} rowSpan={1}>
            <GridAlign
              photo={category1}
              title="Living Room"
              content="250+ Items"
            />
          </GridItem>
          <GridItem colSpan={{ base: 3, lg: 1 }} rowSpan={1}>
            <GridAlign
              photo={category2}
              title="Drawing Room"
              content="100+ Items"
            />
          </GridItem>
          <GridItem
            colSpan={{ base: 3, lg: 1 }}
            rowSpan={{ base: 1, lg: 2 }}
            h={{ base: "250px", lg: "500px" }}
          >
            <GridAlign
              photo={category3}
              styles="510px"
              title="Dinning Room"
              content="250+ Items"
            />
          </GridItem>
          <GridItem colSpan={{ base: 3, lg: 2 }} rowSpan={1}>
            <GridAlign
              photo={category4}
              title="Kitchen Area"
              content="350+ Items"
            />
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default Category;
