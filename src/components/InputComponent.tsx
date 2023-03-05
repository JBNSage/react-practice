import React, { Dispatch, FC, SetStateAction } from "react";
import NestedComponent from "./NestedComponent";

interface Props {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
}

const InputComponent: FC<Props> = ({ text, setText }) => {
  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <NestedComponent setText={setText} />
    </div>
  );
};

export default InputComponent;
