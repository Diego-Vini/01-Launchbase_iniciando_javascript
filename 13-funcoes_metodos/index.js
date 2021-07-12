/*
- Continuação do arquivo 10-arrays_ou_vetores
- Usando funções para calculo de média e envio da mensagem
*/

const alunosDaTurmaA = [
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
      nota: 8
    }
  ];

const alunosDaTurmaB = [
    {
      nome: "Carlos",
      nota: 3
    },
    {
      nome: "Rafael",
      nota: 6
    },
    {
      nome: "Marta",
      nota: 2
    }
  ];

  function calculaMedia(alunos) {
    return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3;
  }

const mediaTurmaA = calculaMedia(alunosDaTurmaA);
const mediaTurmaB = calculaMedia(alunosDaTurmaB);

function enviaMensagem(media, turma) {
     if (media > 5) {
        console.log(`A media da ${turma} foi de ${media}, Parabéns`)
      } else {
        console.log(`A media da turma ${turma} foi menor que 5`)
      };
}

enviaMensagem(mediaTurmaA, "TurmaA");
enviaMensagem(mediaTurmaB, "TurmaB");

  
  
  
      