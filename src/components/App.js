import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  let [click , setClick] = useState(false); 
  
  let handleClick = ()=> {
    setClick(true);
  }
  return (
    <div id="main">
      // Do not alter the main div
      <button id="click" onClick={handleClick}>Click</button>
      {
        click && (
          <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
        )
      }
    </div>
  );
}


export default App;
