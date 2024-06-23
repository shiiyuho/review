//findは配列の中身を詮索するメソッド（一つ一つ）

//70以下の数字を詮索するコード
const array = [99, 88, 77, 66, 55];

const num = array.find((element) => element < 70);

console.log(num);

//idをもとに配列内を詮索するコード
const students = [
  { id: 1, name: "john", age: 12 },
  { id: 2, name: "mary", age: 10 },
  { id: 3, name: "taro", age: 11 },
];

const student = students.find(({ id }) => id === 2);

console.log(student);
