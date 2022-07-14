const btnCount = document.querySelector('.btn-count');
const counter = document.getElementById('count');

btnCount.addEventListener('click', () => {
  let cont = parseFloat(counter.innerText);
  cont += 1;
  counter.innerText = cont;
})