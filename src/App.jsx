import "./App.css";
import { useState } from "react";
import Header from "./component/Header";
import Main from "./component/Main";

function App() {
  const [selectTab, setSelectTab] = useState();
  function HandleSelect(Tab) {
    setSelectTab(Tab);
  }
  return (
    <>
      <Header trend={HandleSelect} selectTab={selectTab} />
      <Main selectTab={selectTab} />
    </>
  );
}

export default App;
