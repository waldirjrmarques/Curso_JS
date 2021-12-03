/*
Link sobre Variáveis =  https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables#the_difference_between_var_and_let

Regras para declarar Identificadores de uma Variavel
    *

*/

// Declaração de Variável

    let n1 = 5   //Declarando a variavel n1 e atribuindo o valor 5
        n1 = 6   // Atribuindo a variavel n1 o valor 6 (n1 deixa de ser 5 e passa a valer 6)  
        n1 = null // A variavél deixa  de valer 6 e passa a ser nula 

        // n1 -> Identificador
        // =  -> Atribuição
        // 5,6,null -> valores atribuidos para a variavel n1
 
    console.log(n1) // comando para mostra a variavel com nodejs (f8)   

/*

Regras para declarar Identificadores de uma Variavel
    * Podem começar com (letra , $ , _ )
    * Não podem começar com números
    * É possível usar letras ou números 
    * É possivel usar acentos e símbolos
    * Não podem conter espaços
    * Não podem ser palavras reservadas
    
Dicas:
    * Variavel Maiúsculas e Minúsculas fazer a diferença
        Ex: 
            let A = 10
            let a = 15

    *Tentar escolher nomes coerentes para as variáveis 

Tipos Primitivos das variáveis
    * number (Numeros Inteiros e Reais )
        -infinity
        -NaN
    * string (Cadeia de caracteres)
    * boolean (true (Verdadeiro) / false (falso)) 
    * null
    * undefined
    * object
        -Array
    * function      
*/   

/* Variável tipo Number (Numeros Inteiros e Reais )
    Ex:
*/
        let x1 = 5
        let x2 = 4.5

/* Variável tipo String (Caracteres)
    Ex:
*/      
        let y1 = 'String1'
        let y2 = 'String2'

/* Variável tipo Boolean (verdadeiro / falso)
    Ex:
*/
        let z1 = true
        let z2 = false

/* Variável tipo Null
    Ex:
*/ 
        let w1 = null
        
/* Variável tipo Array (Vetor)
    Ex:
*/        
        let t1 = [1,'Bob','Steve',10]

/* Variável tipo Object 
    Ex:
*/  
        let r1 = document.querySelector('h1')  
        // Usando o Dom   (Tudo em JavaScript é um objeto e pode ser armazenado em uma variável.)

        


    