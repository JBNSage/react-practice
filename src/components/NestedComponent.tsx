import React, { Dispatch, FC, SetStateAction } from "react";
import GrandChildre from "./GrandChildre";

interface Props {
  setText: Dispatch<SetStateAction<string>>;
}
const NestedComponent: FC<Props> = ({ setText }) => {
  return (
    <div>
      <GrandChildre />
    </div>
  );
};

export default NestedComponent;
