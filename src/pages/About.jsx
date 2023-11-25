import Layout from "../components/Layout";
import Benefits from "../components/Benefits";
import Category from "../components/Category";
import Subscribe from "../components/Subscribe";
import { Box } from "@chakra-ui/react";

const About = () => {
  return (
    <Layout>
      <Box width="100%">
        <Benefits />
        <Category />
        <Subscribe />
      </Box>
    </Layout>
  );
};

export default About;
