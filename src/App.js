// export된 컴포넌트(변수, 함수, 객체 등등) 를 import 해서 사용
import { MyElem } from "./component/MyElem";
import { MyComp } from "./component/MyComp";

function App() {
  return (
    <>
      <MyElem />
      <MyComp />
    </>
  );
}

export default App;
