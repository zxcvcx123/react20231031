import { Box, Flex } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Flex
        w={"100%"}
        h={"100px"}
        bg={"gray.300"}
        gap={3}
        align={"center"}
        justify={"space-around"}
      >
        <Box bg={"gold"}>Lorem.</Box>
        <Box bg={"red"}>Dolorum.</Box>
        <Box bg={"gray"}>Voluptates!</Box>
        <Box bg={"blue"}>Eaque.</Box>
        <Box bg={"green"}>Necessitatibus.</Box>
      </Flex>
    </>
  );
}

export default App;
