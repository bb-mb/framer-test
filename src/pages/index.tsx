import { useState } from "react";

import type { NextPage } from "next";
import styled from "@emotion/styled";

import { Segment4 } from "../components";
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

  console.log(type);
  const onTap = (e: MouseEvent | TouchEvent | PointerEvent) => {
    const target = e.target as HTMLSpanElement;
    setType(target.innerText);
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
    </Wrap>
  );
};

export default Home;
