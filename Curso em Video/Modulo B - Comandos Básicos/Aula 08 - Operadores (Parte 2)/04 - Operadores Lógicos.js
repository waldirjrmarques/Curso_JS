/*
    Operadores Lógicos
        *  !  -> nao (negação)
        *  && -> e   (conjunção)
        *  || -> ou  (disjunção)
        
            Ordem de precedência
                1° !
                2° && 
                3° || 
    Ex:
*/   
    //Operadores Lógicos ! -> nao
        let l = 3
        console.log(! (l == 3))
        console.log(! (l != 4))
        console.log(! (l == 4))    
    
        console.log(`---------------------------------`)    
    //Operadores Lógicos && -> e
        let n1 = 5
        let n2 = 2
        console.log(n1 == 5 && n2 == 2 )
        console.log(n1 == 5 && n2 == 3 )
        console.log(true && true)
        console.log(true && false)
    
    console.log(`---------------------------------`)
    
    //Operadores Lógicos || -> ou 
        console.log(n1 == 3 || n2 == 1 )
        console.log(n1 == 5 || n2 == 6 )
        console.log(true || true)
        console.log(true || false)
        
        
/*
    Ordem de precedência dos operadores
        1° Operadores Aritméticos
            () + - * ** / % 
        2° Operadores Relacionais
            <> <= >= == !=
        3° Operadores Lógicos
            1° !
            2° && 
            3° ||

*/              
        console.log(`---------------------------------`)
        console.log(n1 + 3 > 5 && n2 - 1 >= 2 )
        console.log((n1 + 3 == 8) || (n2 - 1 <= 2 ))
         