const a = false;
let resultA = a ? 10 : 90;

console.log(resultA);

function getResult() {
  return a ? "true" : "false";
}

console.log(getResult());