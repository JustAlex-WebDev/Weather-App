import React from "react";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";

function App() {
  return (
    <div className="main-div bg-blue-300 py-5 shadow-xl">
      <TopButtons />
      <Inputs />
    </div>
  );
}

export default App;
