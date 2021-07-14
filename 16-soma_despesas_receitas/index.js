

const usuarios = [
  {
    nome: "Salvio",
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5,19.9]    
  },
  {
    nome: "Marcio",
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0]
  },
  {
    nome: "Lucia",
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [420.2, 29.9]
  }
]

function calculaSaldo(receita, despesa){
  const somaReceita = somaNumeros(receita);
  const somaDespesa = somaNumeros(despesa);

  return somaReceita - somaDespesa
}

function somaNumeros(numeros){
  let soma = 0
  for(let i = 0; i < numeros.length; i += 1){
  soma = soma + numeros[i]  
  }
  return soma;
}

for(let i = 0; i < usuarios.length; i += 1){
  const saldo = calculaSaldo(usuarios[i].receitas, usuarios[i].despesas)
  console.log(saldo)
}