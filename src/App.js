import React, { useState } from "react";
import { Input, Text } from "@chakra-ui/react";

function App(props) {
  const [msg, setMsg] = useState("");
  return (
    <div>
      <Input onChange={(e) => setMsg(e.target.value)} />
      <Text>{msg}</Text>
    </div>
  );
}

export default App;
