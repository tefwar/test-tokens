import React from "react";
import "./App.css";
import {BGColor, MainColor, UiBorder, PrimaryText, BorderRadius,PositiveColor, NegativeColor, WarningColor,} from "./functions/tokens";
import { SmileySad, SmileyMeh, Smiley } from "phosphor-react";

const App = () => {
  return (
    <div className="App">
      <header style={{ background: PrimaryText() ?? "#fff" }} className="App-header">
        <div style={{ background: BGColor() ?? "#fff", borderRadius :BorderRadius()+"px"}} styleclassName="App-inside">
        <h3 style={{ color: PrimaryText() ?? "#fff" }} className="App-h3">Califica tu servicio</h3>
        <h6  style={{ color: PrimaryText() ?? "#fff" }} className="App-h6">Cuéntanos cómo fue tu experiencia</h6>
          <div>
            <SmileySad color={NegativeColor() ?? "#fff" } size={48} weight="bold"/>
            <SmileyMeh color={WarningColor() ?? "#fff" } size={48} weight="bold"/>
            <Smiley color={PositiveColor() ?? "#fff" } size={48} weight="bold"/>
          </div>
        <textarea style={{ borderColor: UiBorder() ?? "#fff" }} className="App-textarea"></textarea>
        <button style={{ background: MainColor() ?? "#fff" }} className="App-button">Guardar</button>
        <p style={{ color: MainColor() ?? "#fff" }}>Color change variable</p>
        </div>
      </header>
    </div>
    
  );
};

export default App;
