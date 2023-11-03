import React, { useState } from "react";
import { Input, Text } from "@chakra-ui/react";

function App(props) {
  const [number, setNumber] = useState(0);
  const isOdd = number % 2 == 1;
  return (
    <div>
      <Input
        type="number"
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <Text>
        {(isOdd && "홀수") || (!isOdd && "짝수")}: {number}
      </Text>
    </div>
  );
}

export default App;
