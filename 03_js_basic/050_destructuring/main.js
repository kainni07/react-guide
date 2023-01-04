// 配列
const [ a, , c ] = ["H1", "H2", "H3"];
console.log(c);

// オブジェクト
const { z, x } = { z: "O1", x: "o2" };
console.log(z);

// 関数に対する分割代入
const arr = ["Japan", "Tokyo", "shinjyuku"];
const objAddress = { country: "Japan", state: "Tokyo", city: "shinjyuku" };

const fnArr = ([ country, state, city ]) => {
  console.log(`country: ${country}`);
  console.log(`state: ${state}`);
  console.log(`city: ${city}`);
};

const fnObj = ({ country, city }) => {
  console.log(`city: ${city}`);
};


fnArr(arr);
fnObj(objAddress);