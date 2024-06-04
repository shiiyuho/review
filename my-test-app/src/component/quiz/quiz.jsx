import { useState } from "react";
import { useEffect } from "react";

function Quiz() {
  const initialQuestions = [
    { id: 1, category: "数学", question: "1 + 1は？", answer: "2" },
    { id: 2, category: "科学", question: "水の化学式は？", answer: "H2O" },
    {
      id: 3,
      category: "歴史",
      question: "日本の初代天皇は？",
      answer: "神武天皇",
    },
  ];

  // テキストエリアの内容を保存するためのStateを作成
  const [questionData, setQuestionData] = useState(
    initialQuestions.map((q) => ({ id: q.id, answer: "" }))
  );

  const [filteredQuestions, setFilteredQuestions] = useState(initialQuestions);
  const [filter, setFilter] = useState("");

  // テキストエリアの内容が変更されたときに呼び出される関数
  const handleInputChange = (event, questionId) => {
    const { value } = event.target; //valueの二つのオブジェクトを管理
    setQuestionData((prevData) =>
      prevData.map((q) => (q.id === questionId ? { ...q, answer: value } : q))
    );
  };

  // フォームの送信時に呼び出される関数
  const handleSubmit = (event, questionId) => {
    event.preventDefault();
    const answeredQuestion = questionData.find((q) => q.id === questionId);

    alert(
      `Question: ${answeredQuestion.question}/nAnswer: ${answeredQuestion.answer}`
    );
    // ここで、クイズの問題を保存する処理を追加できます
  };
  //フィルターメソッド部分
  const handleFilterChange = (event) => {
    const selectedCategory = event.target.value;
    setFilter(selectedCategory);
    if (selectedCategory === "") {
      setFilteredQuestions(initialQuestions);
    } else {
      setFilteredQuestions(
        initialQuestions.filter((q) => q.category === selectedCategory)
      );
    }
  };

  // コンポーネントがレンダリングされるたびに実行される
  useEffect(() => {
    //quizコンポーネントが再実行（表示）されるときに下記のコードをコンソールに表示させる。
    console.log("レンダリングされたよ！！");
  });

  return (
    <div>
      <div>
        <label>カテゴリでフィルタ:</label>
        <select value={filter} onChange={handleFilterChange}>
          <option value="">全て</option>
          <option value="数学">数学</option>
          <option value="科学">科学</option>
          <option value="歴史">歴史</option>
        </select>
      </div>

      {filteredQuestions.map((q) => (
        <form key={q.id} onSubmit={(e) => handleSubmit(e, q.id)}>
          <label>
            <textarea
              value={questionData.find((data) => data.id === q.id).answer}
              onChange={(e) => handleInputChange(e, q.id)}
              rows="4"
              cols="50"
              placeholder={q.question}
            />
          </label>
          <br />
          <div className="button">
            <button type="submit">Submit</button>
          </div>
        </form>
      ))}

      <div>
        <h2>結果</h2>
        {questionData.map((data) => (
          <div key={data.id}>
            <p>
              <strong>問題:</strong>{" "}
              {initialQuestions.find((q) => q.id === data.id).question}
            </p>
            <p>
              <strong>答え:</strong> {data.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Quiz;
