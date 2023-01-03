const h1Element = document.querySelector('h1');
console.log(h1Element);
console.dir(h1Element);
h1Element.textContent = '変更したタイトル';


const btnEl = document.querySelector('button');
// 第二引数に直接関数を登録
// btnEl.addEventListener('click', (e) => {
//   console.log('hello');
//   console.log(e.target)
// });

const helloFn = (e) => {
  console.dir(e.target.textContent);
  console.log('hello, again!');
};

btnEl.addEventListener('click', helloFn);

// button.addEventListener('click', function(event) {
//   // 処理
// });
