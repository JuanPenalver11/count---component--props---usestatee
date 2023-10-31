import React, { useState } from "react";
import Count from "./components/Count"
import "./App.css";


function App() {
  const [count, setCount] = useState(0);

  function add() {
    setCount(count + 1  );
  }

  function sub() {
    setCount(count - 1);
  }
  return (
    <div className="App">
      <div className="container">
        <button className="sub" onClick={sub}>
          -
        </button>

        <Count number={count}/>
        
        <button className="add" onClick={add}>
          +
        </button>
      </div>
    </div>
  );
}

export default App;
