/*
======================================================
  Operadores lógicos

  &&  "E" As duas condições devem ser verdadeiras
       para que a condição final seja verdadeira
  ||  "OU" Uma das condições deve ser verdadeira
       para que a condição final seja verdadeira
  !    "NÃO" Nega a condição     
======================================================
*/

console.log(5 == 5 && 6 == 6) //true
console.log(5 == 5 && 6 != 6) //false

console.log(5 == 5 || 6 == 6) //true
console.log(5 == 5 || 6 != 6) //true

console.log(!(5 > 6)) // true
console.log(!(5 < 6)) //false

/*
 - Desafio 1:
   - Verificar se uma pessoa possui 18 anos ou mais;
   - Se sim, deixar entrar;
   - Se não, bloquear entrada;
   - Se a pessoa tiver 17 anos, avisar para voltar com 18 anos
*/
console.log('Desafio 1 - Melhorado')

const idade = 18;

if(!(idade >= 18) || idade == 17) {
  //Entra nesse console log se ao menos uma das expressões forem verdadeiras
  console.log('Entrada bloqueada')
} else {
  console.log('Entrada liberada')
};