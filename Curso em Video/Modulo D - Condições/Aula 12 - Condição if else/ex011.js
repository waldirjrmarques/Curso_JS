var idade = 71
console.log (`Voce tem ${idade} anos`)
if (idade < 16){
    console.log (`Nenor de idade -  Nao pode votar`)
}else {
    if (idade >= 16 && idade < 18) {
        console.log (`Nenor de idade -  Votar e opcional`)
    }else{
        if (idade >= 18 && idade <= 70) {
            console.log (`Maior de idade -  Votar e obrigatorio`)   
        }else{
            console.log (`Maior de idade -  Votar e opcional`)  
        }
    }
}


/* 
ou

var idade = 71
console.log (`Voce tem ${idade} anos`)
if (idade < 16){
    console.log (`Nenor de idade -  Nao pode votar`)
}
else if (idade >= 16 && idade < 18) {
        console.log (`Nenor de idade -  Votar e opcional`)
}
else if (idade >= 18 && idade <= 70){
        console.log (`Maior de idade -  Votar e obrigatorio`)   
    }
else{
        console.log (`Maior de idade -  Votar e opcional`) 
}

*/