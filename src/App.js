import React from "react";
import {
  Box,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Switch,
  Textarea,
} from "@chakra-ui/react";

function App(props) {
  return (
    <div>
      <Center>
        <Box w={"480px"}>
          <Image src="https://bit.ly/dan-abramov" />
        </Box>
        <Box>
          <Image boxSize={"100px"} src="https://bit.ly/dan-abramov" />
        </Box>
        <Box>
          <Image boxSize={"200px"} src="https://bit.ly/dan-abramov" />
        </Box>
        <Box>
          <Image
            boxSize={"200px"}
            borderRadius={"full"}
            src="https://bit.ly/dan-abramov"
          />
        </Box>
        <Box>
          <Image src="abcd.jpg" fallbackSrc="https://via.placeholder.com/150" />
        </Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </Center>
    </div>
  );
}

export default App;
