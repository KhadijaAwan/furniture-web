import Chairs from "./Chairs";
import Table from "./Table";
import Sofas from "./Sofas";
import Beds from "./Beds";
import Lamps from "./Lamps";
import Storage from "./Storage";
import Kitchen from "./Kitchen";
import Gardening from "./Gardening";
import { Box, Tab, TabList, Tabs, TabPanel, TabPanels } from "@chakra-ui/react";
import Dinning from "./Dinning";

const TabsSection = () => {
  return (
    <Box pt={2} pb={{ base: "2", md: "8" }} width="100%">
      <Tabs variant="soft-rounded" colorScheme="purple" isLazy>
        <TabList
          position="relative"
          overflowX={{ base: "scroll", lg: "unset" }}
          css={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
          whiteSpace="nowrap"
          px={{ base: "0", lg: "12" }}
        >
          <Tab>All</Tab>
          <Tab>Chairs</Tab>
          <Tab>Tables</Tab>
          <Tab>Sofas</Tab>
          <Tab>Beds</Tab>
          <Tab>Lamps</Tab>
          <Tab>Dinning</Tab>
          <Tab>Storage</Tab>
          <Tab>Kitchen</Tab>
          <Tab>Gardening</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Box width="100%">
              <Chairs />
              <Table />
              <Sofas />
              <Beds />
              <Lamps />
              <Dinning />
              <Storage />
              <Kitchen />
              <Gardening />
            </Box>
          </TabPanel>
          <TabPanel>
            <Box width="100%">
              <Chairs />
            </Box>
          </TabPanel>
          <TabPanel>
            <Box width="100%">
              <Table />
            </Box>
          </TabPanel>
          <TabPanel>
            <Box width="100%">
              <Sofas />
            </Box>
          </TabPanel>
          <TabPanel>
            <Box width="100%">
              <Beds />
            </Box>
          </TabPanel>
          <TabPanel>
            <Box width="100%">
              <Lamps />
            </Box>
          </TabPanel>
          <TabPanel>
            <Box width="100%">
              <Dinning />
            </Box>
          </TabPanel>
          <TabPanel>
            <Box width="100%">
              <Storage />
            </Box>
          </TabPanel>
          <TabPanel>
            <Box width="100%">
              <Kitchen />
            </Box>
          </TabPanel>
          <TabPanel>
            <Box width="100%">
              <Gardening />
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default TabsSection;
