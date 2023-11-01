function App() {
  return (
    <>
      <MyComp name={"흥민"} age={33} address={"신촌"} city={"서울"} />
      <MyComp age={22} address={"강남"} city={"서울"} />
    </>
  );
}

function MyComp({ name = "강인", address, city, age = 10 }) {
  return (
    <div>
      <p>
        {name} 은 {age}세 이고 {address}, {city}에 산다.
      </p>
    </div>
  );
}

export default App;
