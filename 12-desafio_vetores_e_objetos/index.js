// Crie um programa com um objeto para armazenar dados de um programador
// Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.

const programador = {
  nome: "Carlos",
  idade: 32,
  especialidades: [
    {nome: 'C++', especialidade: 'Desktop'},
    {nome: 'Python', especialidade: 'Data Science'},
    {nome: 'Java Script', especialidade: 'Web/Mobile'},
  ]
};

console.log(`O usuario ${programador.nome} tem ${programador.idade} e usa a tecnologia ${programador.especialidades[0].nome} com especialidade
em ${programador.especialidades[0].especialidade}`);