import { useIndexContext } from "@/contexts/IndexContex";
import React, { FC } from "react";

const GrandChildre: FC = () => {
  const { setText } = useIndexContext();

  return (
    <div>
      <input
        placeholder="gran nieto"
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default GrandChildre;
