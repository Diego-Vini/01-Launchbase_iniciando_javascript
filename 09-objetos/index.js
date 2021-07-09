/*
- Continuação de 04-condicionais
- Criando objetos
*/

const aluno01 = {
nome: "Diego",
nota: 9.8
}
const aluno02 = {
nome: "Vinicius",
nota: 10
}

const aluno03 = {
nome: "Matheus",
nota: 2
}

const media = (aluno01.nota + aluno02.nota + aluno03.nota) / 3;

if (media > 5) {
  console.log(`A media foi de ${media}, Parabéns`)
} else {
  console.log('A media foi menor que 5')
};
