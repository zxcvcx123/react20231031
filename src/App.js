import { Box, Center, Circle, Square } from "@chakra-ui/react";
import { PhoneIcon, QuestionIcon } from "@chakra-ui/icons";

function App() {
  return (
    <>
      <Center bg={"lightskyblue"} h={"200px"}>
        <Square bg={"yellow.100"} w={"100px"} h={"100px"}>
          lorem.
        </Square>
      </Center>

      <Center bg={"red"} h={"200px"}>
        <Circle bg={"blue"} w={"100px"} h={"100px"}>
          <QuestionIcon w={"50px"} h={"50px"} />
        </Circle>
      </Center>
    </>
  );
}

export default App;
