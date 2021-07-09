//Crie um programa para calcular a aposentadoria de uma pessoa.

const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;

const calculoAposentadoria = idade + contribuicao;

console.log("====Primeira Solução Encontrada.====")

const aposentadoriaHomem = sexo == "M" &&  contribuicao >= 35 && calculoAposentadoria >= 95;
const aposentadoriaMulher = sexo == "F" && contribuicao >= 30 && calculoAposentadoria >= 85;

if(aposentadoriaHomem || aposentadoriaMulher) {
  console.log(`${nome} você já pode se aposentar`)
} else {
  console.log(`${nome} você não pode se aposentar`)
}

console.log("====Segunda Solução Encontrada.====")

if (sexo == "F" && calculoAposentadoria >= 85 && contribuicao >= 30) {
      console.log(`${nome} voce já pode se aposentar`)
  } else if (sexo == "M" && calculoAposentadoria >= 95 && contribuicao >= 35){
        console.log(`${nome} você já pode se aposentar`)
  } else {
      console.log(`${nome} você não pode se aposentar`)
    }
    
    