import React from "react";
import { Button } from "@chakra-ui/react";

function MyComp({ someProp }) {
  return (
    <>
      <div>
        <Button onClick={someProp}>버튼</Button>
      </div>
    </>
  );
}

function App(props) {
  function func1() {
    console.log("func1 실행됨");
  }
  return (
    <div>
      <MyComp someProp={func1}></MyComp>
    </div>
  );
}

export default App;
