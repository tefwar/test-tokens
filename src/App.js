import React from "react";
import "./App.css";
import {BGColor, MainColor, UiBorder, PrimaryText, SecondaryText, BorderRadius,PositiveColor, NegativeColor, WarningColor,} from "./functions/tokens";
import { SmileySad, SmileyMeh, Smiley } from "phosphor-react";

const App = () => {
  return (
    <div className="App">
      <header style={{ background: PrimaryText() ?? "#fff" }} className="App-header">
        <div style={{ background: BGColor() ?? "#fff", borderRadius :BorderRadius()+"px",  width:344+"px", }} styleclassName="App-inside">
        <h3 style={{ color: PrimaryText() ?? "#fff" }} className="App-h3">Califica tu servicio</h3>
        <h6  style={{ color: SecondaryText() ?? "#fff" }} className="App-h6">Cuéntanos cómo fue tu experiencia</h6>
          <div className="App-emojis">
            <SmileySad color={NegativeColor() ?? "#fff" } size={48} weight="bold"/>
            <SmileyMeh color={WarningColor() ?? "#fff" } size={48} weight="bold"/>
            <Smiley color={PositiveColor() ?? "#fff" } size={48} weight="bold"/>
          </div>
        <textarea style={{ borderColor: UiBorder() ?? "#fff" , borderRadius :BorderRadius()+"px"}} className="App-textarea"></textarea>

        <button style={{ background: MainColor() ?? "#fff" , borderRadius :BorderRadius()+"px"}} className="App-button">Guardar</button>
        </div>
      </header>
    </div>
    
  );
};

export default App;
