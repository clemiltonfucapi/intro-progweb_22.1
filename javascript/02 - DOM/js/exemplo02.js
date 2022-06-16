// recuperar elementos classe "caixa"
let caixas = document.getElementsByClassName('caixa')
    //estilizar as caixas
console.log(caixas)
for (i = 0; i < caixas.length; i++) {
    caixas[i].style.border = "1px solid black"
    caixas[i].style.width = '300px'
    caixas[i].style.margin = '10px auto'
    caixas[i].style.padding = "10px"
}

let amarelo = document
    .getElementsByClassName('borda-amarela')[0]
amarelo.style.border = "10px solid yellow"


let verde = document
    .getElementsByClassName('borda-verde')[0]
verde.style.border = "10px solid green"