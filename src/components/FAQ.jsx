import {
  Box,
  Heading,
  Text,
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Center,
} from "@chakra-ui/react";
import { faqSection } from "../components/Theory";

const FAQ = () => {
  return (
    <Box bg="white" px={{ base: "4", lg: "12" }} py={10}>
      <Box
        bg="gray.100"
        py={14}
        borderRadius="lg"
        w={{ base: "100%", lg: "70%" }}
        mx="auto"
      >
        <Center>
          <Stack>
            <Text fontSize="sm" my={3} letterSpacing="0.5px" mx="auto">
              – FAQ
            </Text>
            <Heading
              as="h2"
              size={{ base: "md", lg: "lg" }}
              w="340px"
              textAlign="center"
              lineHeight="1.5"
              mb={10}
            >
              Questions? Look Here.
            </Heading>
          </Stack>
        </Center>

        <Center>
          <Accordion allowToggle width={{ base: "100%", lg: "70%" }}>
            {faqSection.map((f) => (
              <AccordionItem key={f.id}>
                <h2>
                  <AccordionButton
                    borderRadius="xl"
                    _hover={{
                      bg: "Black",
                      color: "gray.300",
                    }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      {f.title}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel py={6} bg="white" fontSize="sm">
                  {f.content}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Center>
      </Box>
    </Box>
  );
};

export default FAQ;
