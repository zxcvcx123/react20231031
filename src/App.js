import React from "react";
import { Input } from "@chakra-ui/react";

function App(props) {
  let text = "";

  function changeText(e) {
    text = e.target.value;
    console.log(text);
  }

  return (
    <div>
      <input type="text" onChange={changeText} />

      <div
        style={{ backgroundColor: "yellow", width: "100px", height: "50px" }}
      >
        <p>{text}</p>
      </div>
    </div>
  );
}

export default App;
