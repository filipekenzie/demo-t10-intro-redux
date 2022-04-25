import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/counter";
import Display from "./components/display";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Display />
      </header>
    </div>
  );
}

export default App;
