import { useState } from "react";

import type { NextPage } from "next";
import styled from "@emotion/styled";

import { Segment4, SegmentCode, TodoInput } from "../components";
import { TODO_TYPE } from "../utils";

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin: 3rem 0;
`;

const Home: NextPage = () => {
  const [type, setType] = useState(TODO_TYPE.ALL);
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState<{ text: string; type: string }[]>(
    []
  );

  const onTap = (e: MouseEvent | TouchEvent | PointerEvent) => {
    const target = e.target as HTMLSpanElement;
    setType(target.innerText.trim());
  };

  const onSubmit = () => {
    if (!inputText) return;
    setTodoList([...todoList, { text: inputText, type: TODO_TYPE.TODO }]);
    setInputText("");
  };

  return (
    <Wrap>
      <h2>TODO LIST</h2>
      <Segment4
        label1={TODO_TYPE.ALL}
        label2={TODO_TYPE.TODO}
        label3={TODO_TYPE.DOING}
        label4={TODO_TYPE.DONE}
        tap={onTap}
      />
      <SegmentCode
        list={Object.values(TODO_TYPE)}
        onTabClick={(selected: string) => setType(selected)}
      />
      <TodoInput
        color='14213d'
        value={inputText}
        onChange={(text: string) => setInputText(text)}
        onSubmit={onSubmit}
        style={{ marginTop: 8 }}
      />
      {todoList.map((todo) => {
        if (type === TODO_TYPE.ALL || todo.type === type) {
          return (
            <div key={todo.text}>
              {todo.text} / {todo.type}
            </div>
          );
        }
      })}
    </Wrap>
  );
};

export default Home;
