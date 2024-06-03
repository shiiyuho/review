import { useState } from "react";

function Quiz() {
  const [quiz, setQuiz] = useState();

  // テキストエリアの内容が変更されたときに呼び出される関数
  const handleInputChange = (event) => {
    setQuiz(event.target.value);
  };

  return (
    <div>
      <textarea
        value={quiz}
        onChange={handleInputChange}
        rows="4"
        cols="50"
        placeholder="ここに問題が出題されます"
      />
      <div className="button">
        <button type="submit">1</button>
        <button type="submit">2</button>
        <button type="submit">3</button>
      </div>
    </div>
  );
}

export default Quiz;
