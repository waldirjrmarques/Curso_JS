// Condição Multipla

var agora = new Date()
var semana = agora.getDay() 
//console.log(`${semana}`) // 0-6 (zero = domingo)

switch (semana) {
    case 0:
        console.log(`Domingo`)
        break // comando obrigatório
    case 1:
        console.log(`Segunda`)
        break
    case 2:
        console.log(`Terca`)
        break
    case 3:
        console.log(`Quarta`)
        break
    case 4:
        console.log(`Quinta`)
        break
    case 5:
        console.log(`Sexta`)
        break
    case 6:
        console.log(`Sabado`)
        break
    default:
        console.log(`[ERRO - Dia invalido]`)
        break
}
/*
switch (expressao){
    case empressao :
        console.log(`!@#$%@$`)
        break
}

obs: ideal para usar com valores inteiros e caracteres
*/