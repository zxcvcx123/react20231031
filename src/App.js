import React from "react";

function App(props) {
  function handleClick(e) {
    e.preventDefault();
    console.log("다른 일을 시킴");
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("다른 일을 시킴");
  }
  return (
    <div>
      <a href="https://www.naver.com" onClick={handleClick}>
        네이버
      </a>
      <div>
        <form action="https://search.daum.net/search" onSubmit={handleSubmit}>
          <input type="text" name="q" />
          <button>검색</button>
        </form>
      </div>
    </div>
  );
}

export default App;
