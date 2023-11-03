import React from "react";
import { Button } from "@chakra-ui/react";
import { logDOM } from "@testing-library/react";

function MyComp({ children, excuteClick }) {
  return <Button onClick={excuteClick}>{children}</Button>;
}
function App(props) {
  function func1() {
    console.log("func1 실행");
  }

  return (
    <div>
      <MyComp excuteClick={func1}>Button1</MyComp>
      <MyComp excuteClick={() => console.log("화살표 함수 실행")}>
        Button2
      </MyComp>
      <MyComp excuteClick={() => alert("버튼 클릭")}>Button3</MyComp>
    </div>
  );
}

export default App;
