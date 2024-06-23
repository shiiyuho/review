//findIndexは配列の中身を詮索し、条件に合うものを、インデックス番号で返してくれるメソッド
//インデックス番号・・・配列内での番号（右から、0、1、2、3、・・・）

//30が何番か教えてくれるb
const numbers = [10, 20, 30, 40, 50];
const index = numbers.findIndex((num) => num >= 30);
console.log(index);

//バナナがあるかどうかの詮索をするコード
const fruits = ["apple", "banana", "cherry"];
const index2 = fruits.findIndex((fruit) => fruit === "banana");
console.log(index2);
