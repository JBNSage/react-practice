import React, { FC } from "react";

interface Props {
  customText?: string;
}

const Text: FC<Props> = ({ customText = "hola" }) => {
  return (
    <>
      <div>{customText}</div>
    </>
  );
};

export default Text;
