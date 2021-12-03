/* 
    Tipos de Operadores
        * Aritméticos
        * Atribuição
        * Relacionais
        * Lógicos
        * Ternário
    
    Operadores Aritméticos 
        5 + 2 -> 7
        5 - 2 -> 3
        5 * 2 -> 10
        5 / 2 -> 2.5
        5 % 2 -> 1 (% resto da divisão inteira)
        5 ** 2 -> 25 (Potência)
        
        EX:
*/
        let n1 = 5
        let n2 = 2
        console.log(n1 + n2)
        console.log(n1 - n2)
        console.log(n1 * n2)
        console.log(n1 / n2)
        console.log(n1 % n2)
        console.log(n1 ** n2)

        console.log(`--------------------OU--------------------`)

        let x1 = 5
        let x2 = 2
        let soma = n1 + n2
        let subtração = n1 - n2
        let multiplicacao = n1 * n2
        let divisao = n1 / n2
        let restodiv = n1 % n2
        let potencia = n1 ** n2

        console.log(soma)
        console.log(subtração)
        console.log(multiplicacao)
        console.log(divisao)
        console.log(restodiv)
        console.log(potencia)

        console.log(`------------------------------------------`)

/*         
        Ordem de Precedência dos Operadores Aritméticos 
            1° ->  () 
            2° ->  ** 
            3° ->  * / %  (da esquerda para a direita)
            4° ->  + -    (da esquerda para a direita)           
        EX:
*/      
            console.log((x1 + x2 )**2) 
            console.log((x1 + x2) * (7 + 1) % 2)
            console.log(x1 % 2 + 4 /x2) 
/*
        Auto Atribuição
        Ex:    
*/      console.log(`------------------------------------------`)  
                let nu = 5
                    nu = nu + 4
                    console.log(nu)
                    nu = nu - 5
                    console.log(nu)
                    nu = nu * 4
                    console.log(nu)
                    nu = nu / 2
                    console.log(nu)
                    nu = nu ** 2
                    console.log(nu)
                    nu = nu % 5
                    console.log(nu)

            console.log(`--------------------OU--------------------`)        
                let n = 5
                    n += 4
                    console.log(n)
                    n -= 5
                    console.log(n)
                    n *= 4
                    console.log(n)
                    n /= 2
                    console.log(n)
                    n **= 2
                    console.log(n)
                    n %= 5
                    console.log(n) 
            
        console.log(`------------------------------------------`) 
/*
        Incrementos
        Ex:
*/                    
            let x = 5
                x++
                console.log(x)
                x--
                console.log(x)