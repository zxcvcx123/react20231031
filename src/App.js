import React from "react";
import { Box, Button, Center } from "@chakra-ui/react";

function App(props) {
  function handleClick(e) {
    // event bubbling 막는 메소드
    e.stopPropagation();
    console.log(e.target.className);
  }

  return (
    <div>
      <Center
        className="outerBox"
        w={"200px"}
        h={"200px"}
        bg={"gold"}
        onClick={handleClick}
      >
        <Center
          className="innerBox"
          w={"100px"}
          h={"100px"}
          bg={"blue"}
          onClick={handleClick}
        >
          <Button className="button" colorScheme="yellow" onClick={handleClick}>
            Button1
          </Button>
        </Center>
      </Center>
    </div>
  );
}

export default App;
