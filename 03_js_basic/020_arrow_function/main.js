function fn(number) {
  return number * 2;
}

// const fnArrow = (number) => {
//   return number * 2;
// }

// 引数が１つの時は（）を省略可
// 本文が１行の時は{}とreturnを省略可
const fnArrow = number => number * 2;

// オブジェクトが戻り値の場合
const fnArrowObj = number => ({ result: number * 2 })

console.log(fn(2));
console.log(fnArrow(5));
console.log(fnArrowObj(3));