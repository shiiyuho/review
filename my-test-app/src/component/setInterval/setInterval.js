import React, { useEffect, useState } from "react";

const IntervalComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // 1秒ごとにカウントを増やす
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
      console.log("1秒ごとに実行されるタスク");
    }, 1000);

    // コンポーネントがアンマウントされたときにインターバルをクリアする
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>カウント: {count}</h1>
    </div>
  );
};

export default IntervalComponent;
