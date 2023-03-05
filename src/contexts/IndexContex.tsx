import WrapperComponent from "@/common/interfaces/WrapperComponent";
import React, {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface IndexContext {
  setText: Dispatch<SetStateAction<string>>;
  text: string;
}

const IndexContext = createContext<IndexContext | undefined>(undefined);

export const useIndexContext = () => {
  return useContext(IndexContext)!;
};

const IndexContexProvider: FC<WrapperComponent> = ({ children }) => {
  const [text, setText] = useState("nuevo hola");

  return (
    <IndexContext.Provider value={{ setText, text }}>
      {children}
    </IndexContext.Provider>
  );
};

export default IndexContexProvider;
