let num = document.getElementById(`fnum`)
let lista = document.getElementById(`flista`)
let  res = document.getElementById(`res`)
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){ 
        return true   
    }else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}


function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement(`option`)
        item.text = `valor ${num.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML = ``
    }else {
        alert(`Valor invalido ou ja encontrado na lista.`)
    }
    num.value = ``
    num.focus()
}

function finalizar() {
    if (valores.length == 0){
        alert (`Adicione valores antes de finalizar`)
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores){
            soma += valores[pos]
            media = soma / tot
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        res.innerHTML = ``
        res.innerHTML += `<p> Ao todo, temos ${tot} numeros cadastrados</p>`
        res.innerHTML += `<p> O maior valor informado ${maior} </p>`
        res.innerHTML += `<p> O menor valor informado ${menor} </p>`
        res.innerHTML += `<p> A soma de todos os valoes e ${soma} </p>`
        res.innerHTML += `<p> A  media dos valores e ${media} </p>`
    }
}