import "./App.css";
import Quiz from "./component/quiz/quiz";
import Title from "./component/title/title";
import Filtering from "./component/firter/firter.js";
import Counter from "./component/call/call.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <Filtering />
        <Counter />
        <Quiz />
      </header>
    </div>
  );
}

export default App;
