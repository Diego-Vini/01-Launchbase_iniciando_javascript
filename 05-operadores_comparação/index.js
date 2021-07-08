/*
================================================================================
  Operadores de Comparação:

  >      Maior
  <      Menor
  >=     Maior igual a
  <=     Menor igual a
  ==     Igual a
  ===    Igual e do mesmo tipo
  !=     Diferente de
  !==    Diferente, inclusive do tipo
================================================================================
*/

console.log(5 > 4) //true
console.log(4 < 4) // false
console.log(5 >= 4) //true
console.log(5 <= 4) //false
console.log(4 <= 4) //true

console.log('Operadores de igualdade');

console.log(4 == '4') //true
console.log(4 === '4')//false
console.log(4 !== "5") //true
console.log(4 !== "5") //true

/*
 - Desafio 1:
   - Verificar se uma pessoa possui 18 anos ou mais;
   - Se sim, deixar entrar;
   - Se não, bloquear entrada;
   - Se a pessoa tiver 17 anos, avisar para voltar com 18 anos
*/
console.log('Desafio 1')

const idade = 18;

if(idade >= 18) {
  console.log('Entrada liberada')
}else if (idade == 17) {
  console.log('Voltar quando completar 18 anos')
}else {
  console.log('Entrada bloqueada')
};