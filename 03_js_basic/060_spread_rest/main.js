const nums = [3, 1, 2, 5, 10, 99];

const result = Math.max(...nums);
console.log(result);

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let newArr = [...arr2];
arr2.push(10);
console.log(arr2);
console.log(newArr);
// false 参照先の配列が異なる
console.log(newArr === arr1);
// true
let newArr1 = arr1;
arr1.push(9);

console.log(arr1, newArr1);
console.log(newArr1 === arr1);

let newArr2 = [...arr1, 100, ...arr2];
console.log(newArr2);

// オブジェクトの場合
const obj = {
  name: "Kaimi",
  age: 39,
};

const newObj = { ...obj };
newObj.name = "Chris";
console.log(obj, newObj);

// 関数の場合　引数の数が決まっていない場合など
const restA = (...argA) => console.log(argA);
restA(1, 3);

// 特定の引数だけ別の変数に定義する場合
const restB = (n, ...argB) => console.log(argB, n);
restB(1, 9, 2);