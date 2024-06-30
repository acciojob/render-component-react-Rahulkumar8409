import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {

    const Paragraphy=()=>{
      return <p id="root">"I am learning React. My life is getting better."</p>
    }

  return (
    <div id="main">
        <Paragraphy></Paragraphy>
    </div>
  )
}


export default App;
