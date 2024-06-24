import React, { useEffect } from "react";

function UseEfect() {
  useEffect(() => {
    console.log("useEfectコンポーネントが画面に表示されたよ！");

    // これはクリーンアップ関数
    return () => {
      console.log("コンポーネントが画面から消えたよ！");
    };
  }, []);

  return <div>こんにちは、世界！</div>;
}

export default UseEfect;
