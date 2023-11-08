/*
Variaveis Compostas

Um array é uma variavel que tem varios elementos, cada elemento composto por seu valor e por uma chave de identificação.
obs: O INDICE COMEÇA SEMPRE COM ZERO


Variáveis Compostas (Array = Vetor)
    Variáveis compostas devem ser capazes de armazenar vários valores em um mesma estrurura
*/



let num = [5 , 8 , 4 , 2 , 3 , 1 , 11 , 13 ,20,23, 25, 100 , 102,500, 501]

console.log(num)

console.log(num[0]) // Mostra o valor do Indice 0

num[3] = 6 // troca o indice 3 com o valor 6 
console.log(num)

num.push(10) // Incrementa mais um Indice na ultima posição com o valor 10
console.log(num)


console.log(num.sort()) // Reorganiza o vetor em ordem dos numeros

console.log(num.length) //quantidade de indice em uma array


console.log(num.indexOf(5)) //Verifica se tem o nomero 5 e retorna o indice , caso não tenha o valor retorna -1
(`----------------------------------------------`)

// 1 maneira 

