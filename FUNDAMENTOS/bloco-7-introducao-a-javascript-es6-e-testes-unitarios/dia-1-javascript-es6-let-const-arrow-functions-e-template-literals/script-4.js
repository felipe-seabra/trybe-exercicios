
const replaceX = (name) => {
  const frase = 'Tryber x aqui!';
  let troca = frase.replace(/x/i, name);
  return receiveReplace(troca);
}

const receiveReplace = (string) => {
  const skills = ['JavaScript', 'HTML', 'CSS'];
  return `${string}
Minhas três principais habilidades são:

• ${skills[0]}
• ${skills[1]}
• ${skills[2]}`
}

console.log(replaceX('Bebeto'));