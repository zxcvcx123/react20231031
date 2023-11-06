import React from "react";
import { List, ListItem } from "@chakra-ui/react";

function App(props) {
  const arr = ["피자", "돈까스", "햄버거", "김치찌개", "짱돌찌개"];
  const listItems = arr.map((item, index) => (
    <ListItem key={index}>{item}</ListItem>
  ));

  const arr2 = ["손흥민", "이강인", "김민재"];
  const listItems2 = arr2.map((item, index) => (
    <ListItem key={index}>{item}</ListItem>
  ));

  const arr3 = ["라떼", "아아", "마끼야또"];
  const arr4 = [
    { id: 0, name: "라떼" },
    { id: 1, name: "아아" },
    { id: 2, name: "마끼야또" },
  ];
  return (
    <div>
      <List>{listItems}</List>
      <hr />
      <List>{listItems2}</List>
      <hr />
      <List>
        {arr3.map((i, id) => (
          <ListItem key={id}>{i}</ListItem>
        ))}
      </List>
    </div>
  );
}

export default App;
