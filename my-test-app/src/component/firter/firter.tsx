import React, { useState } from "react";

// フィルタリング・・・特定の条件に基づいてデータの選別を行う

function Filtering() {
  const initialData = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "David" },
    { id: 5, name: "Eve" },
  ];

  const [data, setData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    //条件指定箇所
    const filteredData = initialData.filter((item) =>
      item.name.toLowerCase().includes(term.toLowerCase())
    );
    setData(filteredData);
  };

  return (
    <div>
      <h1>名前のフィルタリング</h1>
      <input
        type="text"
        placeholder="検索"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Filtering;
