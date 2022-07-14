// 🚀 Altere as variáveis para respeitarem o escopo em que foram declaradas.

// Modifique a estrutura da função para que ela seja uma arrow function;

// Modifique as variáveis para que respeitem o escopo onde estão declaradas;

// Modifique as concatenações para template literals.

const testingScope = (escopo) => {
  if (escopo === true) {
    const ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    return `${ifScope} ótimo, fui utilizada no escopo !`;
  } else {
    return 'Não devo ser utilizada fora meu escopo (else)';

  }
}

console.log(testingScope(true));