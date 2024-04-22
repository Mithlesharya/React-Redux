import { useState } from "react";
import "./App.css";
import { textContext } from "./contextapi/TextContext";
import Context from "./pages/Context";


function App() {
  const [text, setText] = useState("");
  return (
    <>
      <textContext.Provider value ={{text, setText}}>
        <Context/>
      </textContext.Provider>
    </>
  );
}

export default App;
