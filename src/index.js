import './index.scss';

console.log('hello');
console.log('hank');

const btn = document.getElementById('btn');
const count = document.getElementById('count');

btn.addEventListener('click', function (e) {
  console.log('click', count.innerText);
  let num = parseInt(count.innerText, 10);
  count.innerText = num + 1;
});
