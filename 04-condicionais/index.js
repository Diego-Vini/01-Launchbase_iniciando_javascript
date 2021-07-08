/*
- Continuação de 03-calculos_javascript
- Criando um estrutura condicional para apresentar 
mensagem após o calculo da média
*/

const aluno01 = "Diego";
const notaAluno01 = 9.8;

const aluno02 = "Vinicius";
const notaAluno02 = 10;

const aluno03 = "Matheus";
const notaAluno03 = 2;

const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3;

if (media > 5) {
  console.log(`A media foi de ${media}, Parabéns`)
} else {
  console.log('A media foi menor que 5')
};

