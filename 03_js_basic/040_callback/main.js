function print(fn) {
  // 渡ってきた引数を関数として実行
  const result = fn(2);
  console.log(result);
}

function fn(number = 2) {
  return number * 2;
}

debugger;
// fnをコールバック関数として渡す
print(fn);