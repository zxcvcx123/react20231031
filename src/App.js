import MyBox, { city, country, address } from "./component/MyBox";
import MyElem, { address as myAddress, email } from "./component/MyElem";

function App() {
  return (
    <>
      <h1>{myAddress}</h1>
      <h1>{address}</h1>
    </>
  );
}

export default App;
