import { useState } from "react";
import { useEffect } from "react";

function Quiz() {
  // テキストエリアの内容を保存するためのStateを作成
  const [questionData, setQuestionData] = useState({
    question: "", //オブジェクト
    answer: "",
  });

  // テキストエリアの内容が変更されたときに呼び出される関数
  const handleInputChange = (event) => {
    const { name, value } = event.target; //nameとvalueの二つのオブジェクトを管理
    setQuestionData((prevData) => ({
      ...prevData, //スプレッド構文を使い既存のステートを保持しつつ、変更された部分だけを更新します。
      [name]: value,
    }));
  };

  // フォームの送信時に呼び出される関数
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Question: ${questionData.quiz}/nAnswer: ${questionData.answer}`);
    // ここで、クイズの問題を保存する処理を追加できます
  };

  // コンポーネントがレンダリングされるたびに実行される
  useEffect(() => {
    //quizコンポーネントが再実行（表示）されるときに下記のコードをコンソールに表示させる。
    console.log("レンダリングされたよ！！");
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <textarea
            value={questionData.question}
            onChange={handleInputChange}
            rows="4"
            cols="50"
            placeholder="ここに問題が出題されます"
          />
        </label>
        <br />
        <label>
          <textarea
            name="answer"
            value={questionData.answer}
            onChange={handleInputChange}
            rows="2"
            cols="50"
            placeholder="ここに答え"
          />
        </label>
        <br />
        <div className="button">
          <button type="submit">1</button>
          <button type="submit">2</button>
          <button type="submit">3</button>
        </div>
      </form>
      <div>
        <h2>結果</h2>
        <p>
          <strong>問題:</strong> {questionData.question}
        </p>
        <p>
          <strong>答え:</strong> {questionData.answer}
        </p>
      </div>
    </div>
  );
}

export default Quiz;
