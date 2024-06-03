import "./App.css";
import Quiz from "./component/quiz/quiz";
import Title from "./component/title/title";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />

        <Quiz />
      </header>
    </div>
  );
}

export default App;
