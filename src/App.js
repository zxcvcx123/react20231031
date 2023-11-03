import React, { useState } from "react";
import { Button, Indicator, Input, Text } from "@chakra-ui/react";

function App(props) {
  let [number, setNumber] = useState(0);
  let [text, setText] = useState("");
  function handleClick() {
    // number++;
  }
  return (
    <div>
      <Button onClick={() => setNumber(number + 1)}>바꾸기</Button>
      <Text>{number}</Text>
      <Input onChange={(e) => setText(e.target.value)}></Input>
      <p>{text}</p>
    </div>
  );
}

export default App;
