import './scss/index.scss'; // 一定要加./

console.log('home.js');
const btn = document.getElementById('btn');
const count = document.getElementById('count');
console.log('process.env.NODE_ENV:' + process.env.NODE_ENV); // process.env.NODE_ENV 輸出到 dist 前會被轉成靜態的字串

btn.addEventListener('click', function (e) {
  console.log('click', count.innerText);
  let num = parseInt(count.innerText, 10);
  count.innerText = num + 1;
});

const add = (a, b) => a + b;

class Test {
  #a = 'private property';
  constructor() {}
  static b = 'static property';
}
const test = new Test();
console.log('private test.a:', test.a);
console.log('static Test.b:', Test.b);
console.log(window);
