// Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
// - document.getElementById()
// - document.getElementsByClassName()
// - document.getElementsByTagName()

// Crie uma função que mude o texto na tag <p>-----</p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
let tagP = document.getElementsByTagName("p");
tagP[1].innerText = "Ganhando bastante dinheiro!";
// Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
let mainColor = document.getElementsByClassName("main-content")
mainColor[0].style.backgroundColor = "rgb(76,164,109)";
// Crie uma função que mude a cor do quadrado vermelho para branco.
let sectionContent = document.getElementsByTagName("section");
sectionContent[0].style.backgroundColor = "White";
// Crie uma função que corrija o texto da tag <h1>.
let corrigeH = document.getElementsByTagName("h1");
corrigeH[0].innerText = "Exercício 5.1 - JavaScript"
// Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
for (let i in tagP) {
    tagP[i].innerText = tagP[i].innerText.toUpperCase();
}
// Crie uma função que exiba o conteúdo de todas as tags <p> no console.
for (let i in tagP) {
    console.log(tagP[i].innerText);
}