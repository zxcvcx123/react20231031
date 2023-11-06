import React, { useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";

function App(props) {
  // set... 메소드로 상태 변경할 수 있음
  // 상태가 같은 지 아닌 지 판단해서 re-render 결정함

  const [number, setNumber] = useState(0);
  const [numberObject, setNumberObject] = useState({ number: 0 });
  const newNumberObj = { ...numberObject };

  function handleNumberObjChange() {
    setNumberObject(newNumberObj.number + 1);
  }
  return (
    <div>
      <Box>
        <Button onClick={() => setNumber(number + 1)}>number 변경</Button>
        <Text>{number}</Text>
      </Box>
      <Box>
        <Button onClick={handleNumberObjChange}>number 객체 변경</Button>
        <Text>{numberObject.number}</Text>
      </Box>
    </div>
  );
}

export default App;
