import logo from "./logo.svg";
import "./App.css";
import MainColor from "./functions/tokens";

const App = () => {
  let color = MainColor();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ color: color ?? "#33e" }}>Main Color Selected</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
