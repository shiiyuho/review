//シャローコピー・・・浅めのコピー
const obj = {
  a: "a",
  b: {
    bb: "bb",
  },
};
//コピー中
const shallowCopy1 = { ...obj };

console.log(obj);
console.log(shallowCopy1); //objが出力される

//ディープコピー・・・内部に存在するすべての値をコピーし、全く別のオブジェクトとして扱う方法です。
const obj2 = {
  aa: "aa",
  bb: {
    bbb: "bbb",
  },
};
const deepCopy = JSON.parse(JSON.stringify(obj2));
console.log(obj2);
console.log(deepCopy);
