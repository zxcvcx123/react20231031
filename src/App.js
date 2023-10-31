

function App() {
  return (
    <div>
    <MyComponent1/>
    <MyComponent2/>
    </div>
  );
}

function MyComponent1(){
  return (
      <div>
        <h1>Hello Component</h1>
      </div>
  )
}

function MyComponent2(){
  return (
      <>
        <p>lorem ipsum great</p>
        <ul>
          <li>lorem</li>
          <li>ipsum</li>
          <li>great</li>
        </ul>
      </>
  )
}
export default App;
