import React, { useState } from "react";
import { Input } from "@chakra-ui/react";

function App(props) {
  const [message, setMessage] = useState("");

  return (
    <div>
      <Input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </div>
  );
}

export default App;
