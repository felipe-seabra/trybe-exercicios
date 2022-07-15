const btnCount = document.querySelector('.btn-count');
const counter = document.getElementById('count');

const clickCount = () => {
  let cont = parseFloat(counter.innerText);
  counter.innerText = cont += 1;
}

btnCount.addEventListener('click', clickCount);