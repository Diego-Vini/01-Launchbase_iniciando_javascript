/*
Usuários e tecnologias
Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias (novo array)
*/

const usuarios = [
  { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
  { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
  { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
]

function infoUsuarios(usuario){
  for(let i = 0; i < usuario.length; i+=1){
    console.log(`${usuario[i].nome} trabalha com ${usuario[i].tecnologias}`)
  }
}

infoUsuarios(usuarios);

console.log("Retornar somente usuarios que trabalham com css:")

function trabalhaComCss(usuarioCss){
   for(let tec = 0; tec < usuarioCss.length; tec += 1) {
       if(usuarioCss[tec] == "CSS") return true;
   }
   return false
}
//console.log(trabalhaComCss(usuarios[0].tecnologias))


for(let i = 0; i < usuarios.length; i += 1) {
    const usuarioTrabalhaComCss = trabalhaComCss(usuarios[i].tecnologias)
     if(usuarioTrabalhaComCss) {
      console.log(`o usuario ${usuarios[i].nome} trabalha com css`)
     }
}
