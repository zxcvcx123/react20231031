import React, { useState } from "react";
import { Button } from "@chakra-ui/react";

function App(props) {
  const [text, setText] = useState("hello");
  return (
    <div>
      <Button
        onClick={(e) => {
          setText("상태 변경완료");
        }}
      >
        상태 변경!
      </Button>
      <p>{text}</p>
    </div>
  );
}

export default App;
