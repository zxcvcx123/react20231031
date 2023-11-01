import aaggee, { city } from "./component/MyElem";
import MyBox, { country } from "./component/MyBox";

function App() {
  return (
    <>
      <MyBox />
      <h1>{country}</h1>
    </>
  );
}

export default App;
