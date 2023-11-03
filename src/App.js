import React, { useState } from "react";
import { Button, Input } from "@chakra-ui/react";

function App(props) {
  // 상태(State)가 변경(이전 state와 달라짐)되면
  // Component를 다시 그림 (re render)

  // State : react가 관리하는 component의 값

  // state를 얻는 방법
  // useState();

  // 배열을 return
  // 인덱스 0번 : 현재 상태(state)
  // 인덱스 1번 : state를 변경할 수 있는 메소드
  const [message, setMeessage] = useState("");

  let text = "초기 메시지";
  function handleInputChange(e) {
    text = e.target.value;
    console.log("text: ", text);
  }

  function handleButtonClick(e) {
    setMeessage("상태 바뀜");
  }
  return (
    <div>
      <Input onChange={(e) => (text = e.target.value)} />
      <p>{text}</p>
      <Button onClick={handleButtonClick}>상태 바꾸기</Button>
      <Button onClick={() => setMeessage("")}>빈 문자열로 바꾸기</Button>
      <p>{message}</p>
    </div>
  );
}

export default App;
