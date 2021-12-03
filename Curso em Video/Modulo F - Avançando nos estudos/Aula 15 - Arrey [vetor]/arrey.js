/*
Variaveis Compostas

Um array é uma variavel que tem varios elementos, cada elemento composto por seu valor e por uma chave de identificação.
obs: O INDICE COMEÇA SEMPRE COM ZERO
*/

var valores  = [5,8,2]
valores[3] = 6 // comando cria e/ou mudar o conteudo/valor de um indice
valores.push(7) // comando de acrescenta valores em uma arrey/vetor
//valores.sort() // organiza em ordem crestente o conteudo do vetor 

console.log(valores)
console.log(`${valores.length}`) //variavel .length  verifica quantas posicoes/indice o vetor tem
console.log(`${valores[0]}`) //variavel[] mostra o conteudo do indice 

console.log (`----------------------------------------------`)

// 1 maneira 
for (var posicao  = 0; posicao  < valores.length; posicao++) {
    console.log (`A  posicao ${posicao} tem o valor ${valores[posicao]}`)   
}

console.log (`----------------------------------------------`)

// 2 maneira 

for (let posicao in valores) {
    console.log (`A  posicao ${posicao} tem o valor ${valores[posicao]}`)
}

console.log (`----------------------------------------------`)
//////////////////
let conteudo = valores.indexOf(7) // verifica se tem o numero 7 no vetor e mostra a posicao/indice se aparcer -1 o valor nao foi encontrado 
console.log(`${conteudo}`)// mostra o a posicao do indice 
