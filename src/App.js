function App() {
  const myStyle = {
    color: "blue",
    // background-color: "gold" // lowerCamelCase로 변경
    backgroundColor: "gold",
    fontSize: "70px",
    textAlign: "center",
  };

  return (
    <>
      {/* style 속성은 객체로 주어야 함 */}
      <div style={myStyle}>Lorem ipsum dolor.</div>
      <hr />
      <div
        style={{ color: "blue", backgroundColor: "yellow", fontSize: "30px" }}
      >
        Lorem ipsum dolor.
      </div>
    </>
  );
}

export default App;
