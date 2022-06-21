let a = 10;
let b = 20;
let resultado;

// ex 1:
// adição

resultado = a + b;
console.log(resultado);

//subtração

resultado = a - b;
console.log(resultado);

//multiplicação

resultado = a * b;
console.log(resultado);

//divisão

resultado = a / b;
console.log(resultado);

//módulo (resto)

resultado = a % b;
console.log(resultado);

//ex 2:
if (a > b) {
    console.log("A é maior que B");
}else {
    console.log("B é maior que A");
}

//ex 3:
const num1 = 10;
const num2 = 20;
const num3 = 30;

if (num1 > num2 && num1 > num3) {
    console.log("O primeiro número é maior")
}else if (num2 > num1 && num2 > num3) {
    console.log("O segundo número é maior")
}else if (num3 > num1 && num3 > num2) {
    console.log("O terceiro número é maior")
}else {
    console.log("Tem algo errado");
}

//ex 4:
const valor = 0;

if (valor > 0) {
    console.log("positive");
}else if (valor < 0) {
    console.log("negative");
}else {
    console.log("zero");
}

// ex 5:
const ang1 = 60;
const ang2 = 70;
const ang3 = 50;

if ( ang1 + ang2 + ang3 === 180)
{
    console.log(true);
}else if (ang1 + ang2 > 0 && ang2 + ang3 > 0) {
    console.log(false);
}else {
    console.log("Erro");
}
