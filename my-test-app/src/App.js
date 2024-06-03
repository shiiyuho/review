import "./App.css";
import Title from "./component/title/title";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />

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
}

export default App;
