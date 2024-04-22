import React, { useContext } from "react";
import { textContext } from "../contextapi/TextContext";

const Context = () => {
  const { text, setText } = useContext(textContext);
  return (
    <>
      <h1>{text}</h1>
      <button onClick={()=> setText('Hellow World')}>click me</button>
    </>
  )
};

export default Context;
