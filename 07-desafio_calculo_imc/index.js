/*Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.*/

const nome = "Carlos";
const peso = 84;
const altura = 1.72;

calculoImc = peso / (altura * altura);

const resultadoImc = (calculoImc.toFixed(2));

if(!(resultadoImc < 30) || resultadoImc == 30) {
  console.log(`${nome}, seu peso é ${resultadoImc} e você está acima do peso.`);
} else {
  console.log(`${nome}, seu peso é ${resultadoImc} você não está acima do peso.`)
};