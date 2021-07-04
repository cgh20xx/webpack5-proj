import './scss/index.scss'; // 一定要加./

console.log('home.js');
const btn = document.getElementById('btn');
const count = document.getElementById('count');

btn.addEventListener('click', function (e) {
  console.log('click', count.innerText);
  let num = parseInt(count.innerText, 10);
  count.innerText = num + 1;
});

class Test {
  #a = 'private property';
  constructor() {}
  static b = 'static property';
}
const test = new Test();
console.log('private test.a:', test.a);
console.log('static Test.b:', Test.b);
