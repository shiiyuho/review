import "./App.css";
import Quiz from "./component/quiz/quiz";
import Title from "./component/title/title";
import Filtering from "./component/firter/firter.js";
import Counter from "./component/call/call.js";
import IntervalComponent from "./component/setInterval/setInterval.js";
import TimeoutComponent from "./component/setInterval/setTimeout.js";
import UseEfect from "./component/useEfect/useEfect.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <UseEfect />
        <Filtering />
        <Counter />
        <IntervalComponent />
        <TimeoutComponent />
        <Quiz />
      </header>
    </div>
  );
}

export default App;
