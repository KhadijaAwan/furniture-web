import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Blogs from "../components/Blogs";
import FollowUs from "../components/FollowUs";
import Gallery from "../components/Gallery";
import Subscribe from "../components/Subscribe";
import Deals from "../components/Deals";
import { Box } from "@chakra-ui/react";

const Home = () => {
  return (
    <Layout>
      <Box width="100%">
        <Hero />
        <Deals />
        <FollowUs />
        <Blogs />
        <Gallery />
        <Subscribe />
      </Box>
    </Layout>
  );
};

export default Home;
