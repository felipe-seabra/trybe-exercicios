let corpo = document.getElementsByTagName('body');

let hUm = document.createElement('h1');
hUm.innerText = 'Exercício 5.2 - JavaScript DOM';

corpo[0].appendChild(hUm);

let main = document.createElement('main');
main.className = 'main-content';

corpo[0].appendChild(main);

let section = document.createElement('section');
section.className = 'center-content';

main.appendChild(section);

let p = document.createElement('p');

section.appendChild(p);

let section2 = document.createElement(section);
section2.className = 'left-content';
main.appendChild(section2);

let section3 = document.createElement(section);
section3.className = 'right-content';

main.appendChild(section3);

let img = document.createElement('img');
img.className = 'small-image';
img.src = 'https://picsum.photos/200';
section2.appendChild(img);
