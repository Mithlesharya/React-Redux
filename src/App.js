import { useState } from "react";
import "./App.css";
import { textContext } from "./contextapi/TextContext";
import Context from "./pages/Context";

import HomeContainer from './containers/HomeContainer'
import NavbarContainer from './containers/NavbarContainer'

function App() {
  const [text, setText] = useState("");
  return (
    <>
      {/* <textContext.Provider value ={{text, setText}}>
        <Context/>
      </textContext.Provider> */}
      <NavbarContainer/>
      <HomeContainer/>
    </>
  );
}

export default App;
