import React, { useState } from "react";
import "./App.css";
import { useToggle } from "./useToggle";

const App = () => {
  // can change state name
  const [isVisible, toggle] = useToggle();
  const [isVisible2, toggle2] = useToggle();
  return (
    <>
      <div className="App">
        <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
        {isVisible && <h1 style={{ color: "red" }}>Oh! Hello there!!</h1>}
      </div>
      {/* another one independence from each other*/}
      <br />
      <div className="App">
        <button onClick={toggle2}>{isVisible2 ? "Hide" : "Show"}</button>
        {isVisible2 && <h1 style={{ color: "green" }}>I am still here..</h1>}
      </div>
    </>
  );
};

export default App;
