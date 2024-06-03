import { useState } from "react";

function Quiz() {
  const [quiz, setQuiz] = useState();

  // テキストエリアの内容が変更されたときに呼び出される関数
  const handleInputChange = (event) => {
    setQuiz(event.target.value);
  };

  // フォームの送信時に呼び出される関数
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Question: ${quiz}`);
    // ここで、クイズの問題を保存する処理を追加できます
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <textarea
            value={quiz}
            onChange={handleInputChange}
            rows="4"
            cols="50"
            placeholder="ここに問題が出題されます"
          />
        </label>
        <div className="button">
          <button type="submit">1</button>
          <button type="submit">2</button>
          <button type="submit">3</button>
        </div>
      </form>
    </div>
  );
}

export default Quiz;
