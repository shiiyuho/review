import React, { useEffect } from "react";

const TimeoutComponent = () => {
  useEffect(() => {
    // 5秒後にタスクを実行
    const timeout = setTimeout(() => {
      console.log("5秒後に1回だけ実行されるタスク");
    }, 5000);

    // コンポーネントがアンマウントされたときにタイムアウトをクリアする
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <h1>5秒後にタスクが実行されます。コンソールを確認してください。</h1>
    </div>
  );
};

export default TimeoutComponent;
