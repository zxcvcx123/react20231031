import React from "react";
import {
  Box,
  Button,
  Flex,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

function App(props) {
  return (
    <Flex
      justifyContent={"space-between"}
      py={"8px"}
      my={"10px"}
      bg={"gray.100"}
      px={{ base: "0px", md: "70px", lg: "120px", xl: "480px" }}
    >
      <Flex gap={"7px"} align={"center"}>
        <Text as={"b"}>Navbar</Text>
        <Button variant={"ghost"}>Home</Button>
        <Button variant={"ghost"}>Link</Button>
        <Menu>
          <MenuButton
            variant={"ghost"}
            as={Button}
            rightIcon={<ChevronDownIcon />}
          >
            Dropdown
          </MenuButton>
          <MenuList>
            <MenuItem>Action</MenuItem>
            <MenuItem>Another action</MenuItem>

            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
        <Button variant={"ghost"} isDisabled>
          Disabled
        </Button>
      </Flex>
      <Flex gap={"7px"} align={"center"}>
        <Input size={"sm"} bg={"white"} />
        <Button size={"sm"} variant={"outline"} colorScheme="green">
          Searh
        </Button>
      </Flex>
    </Flex>
  );
}

export default App;
