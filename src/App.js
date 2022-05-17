import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainColor from "./functions/tokens";


const App = () => {
  let color = MainColor();

  return (
    <div className="App">
      <header className="App-header">
        <h3 className="App-h3">Califica tu servicio</h3>
        <h6 className="App-h6">Cuéntanos cómo fue tu experiencia</h6>
        <textarea className="App-textarea"></textarea>
        <button style={{ background: color ?? "#fff" }} className="App-button">Guardar</button>
        <p style={{ color: color ?? "#fff" }}>Color change variable</p>
        
      </header>
    </div>
    
  );
};

export default App;
