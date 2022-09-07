import { useState } from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import MenuItem from "./MenuItem";

function Navbar() {
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);

  return (
    <Flex
      mb={2}
      p={5}
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
    >
      <Box w="200px">
        <Text fontSize="lg" fontWeight="bold">
          JM
        </Text>
      </Box>

      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <HamburgerIcon />}
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
        w="200px"
      >
        <Flex
          align="center"
          justify={["center", "space-between", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <MenuItem url="/" displayText="Home" />
          <MenuItem url="/project" displayText="Project" />
          <MenuItem url="/about" displayText="About" />
          <MenuItem url="/resume" displayText="Resume" isLast />
        </Flex>
      </Box>
    </Flex>
  );
}

export default Navbar;
