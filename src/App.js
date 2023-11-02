import React from "react";
import {
  Box,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Switch,
  Textarea,
} from "@chakra-ui/react";

function App(props) {
  return (
    <div>
      <Box w={"480px"}>
        <FormControl display={"flex"} alignItems={"center"}>
          <Center>
            <FormLabel mb={0}>알림을 받으시겠습니까?</FormLabel>
            <Switch size={"lg"} />
          </Center>
        </FormControl>
      </Box>
    </div>
  );
}

export default App;
