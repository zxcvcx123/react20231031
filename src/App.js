import { Box } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box bg={"gold"} border={"1px solid purple"}>
        Lorem ipsum.
      </Box>
      <Box bg={"blue"} borderTop={"2px dotted green"}>
        Dolor, tempora.
      </Box>
      <Box bg={"red"} borderBottom={"7px double yellow"}>
        Esse, molestiae.
      </Box>
      <Box borderX={"10px solid"} borderColor={"gray.400"}>
        Eveniet, rem.
      </Box>
      <Box borderY={"10px dotted"} borderColor={"red.300"}>
        Hic, voluptates!
      </Box>
      <Box border={"5px solid blue"} borderRadius={"25%"}>
        Molestias, recusandae.
      </Box>
      <Box border={"5px solid yellow"} borderRadius={"30"}>
        Autem, quia!
      </Box>
      <Box border={"10px solid red"} borderTopLeftRadius={"30px"}>
        Odio, vel!
      </Box>
      <Box shadow={"10px 5px 5px red"}>Natus, nulla.</Box>
      <Box shadow={"lg"}>Accusantium, dolor.</Box>
      <Box shadow={"dark-lg"}>Adipisci, porro.</Box>
      <Box shadow={"xl"}>Beatae, soluta.</Box>
      <Box bg={"blue.300"} m={"10px"}>
        Atque, numquam.
      </Box>
      <Box bg={"yellow.600"} m={"20px"}>
        Unde, veritatis?
      </Box>
      <Box bg={"facebook.500"} mx={"30px"}>
        Illo, tempore.
      </Box>
      <Box bg={"gold"} my={"20px"}>
        Dolor, maiores?
      </Box>
      <Box bg={"gray.200"} m={1}>
        Animi, vero.
      </Box>
      <Box bg={"gray.700"} m={2}>
        Dicta, quod.
      </Box>
      <Box bg={"yellow"} m={3}>
        Commodi, qui.
      </Box>
      <Box bg={"red"} m={4}>
        Earum, eveniet.
      </Box>

      <Box bg="red" py={"10px"}>
        Lorem ipsum.
      </Box>
      <Box bg="blue" px={"20px"}>
        Asperiores, commodi?
      </Box>
      <Box bg="gold" p={"30px"}>
        Minus, nobis?
      </Box>
      <Box bg="purple">Alias, quaerat.</Box>
      <Box bg="orange">Enim, voluptate.</Box>
      <Box bg="tomato">Animi, ipsa!</Box>
      <Box bg="green">Est, nostrum.</Box>
      <Box bg="gray">Minima, tempore!</Box>
      <Box bg="skyblue">Aut, molestias.</Box>
      <Box bg="silver">Architecto, quod.</Box>
    </>
  );
}

export default App;
