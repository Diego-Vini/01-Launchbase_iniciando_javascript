/*
- Continuação de 09-objetos
- Agrupando em um Array de objetos
*/

const alunos = [
  {
    nome: "Diego",
    nota: 9.8
  },
  {
    nome: "Vinicius",
    nota: 10
  },
  {
    nome: "Matheus",
    nota: 2
  }
];

    
const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3;
    
if (media > 5) {
  console.log(`A media foi de ${media}, Parabéns`)
} else {
  console.log('A media foi menor que 5')
};
    