/*
- Continuação do arquivo 13-funcoes_metodos
- Adicionando estrutura de repetição 
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
    },
    {
        nome: "Marcos",
        nota: 10
      }
  ];

  function calculaMedia(alunos) {
    let soma = 0;
    for(let i = 0; i < alunos.length; i+= 1) {
      soma = soma + alunos[i].nota
    }
    
    const media = soma / alunos.length;
    return media;
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

  
  
  
      