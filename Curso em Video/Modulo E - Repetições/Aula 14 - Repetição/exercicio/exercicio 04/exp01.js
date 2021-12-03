//alert (`teste`)

function contar() { 
    //res.innerText = (`teste`)
    var inicio = document.getElementById(`txti`)
    var fim = document.getElementById(`txtf`)
    var passo = document.getElementById(`txtp`)
    var res = document.getElementById(`res`)
   
    //value.length - verifica  o campo  da variavel  
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert(`[ERRO] Faltam dados`)
        res.innerText = (`Impossivel contar`)
    }else {
        res.innerHTML = `Contado....<br>`
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p <= 0){
            alert(`Passo invalido ! Passo recebe 1`)
            p = 1
        }
        if (i < f){
            // Contagem crescente
            for (var c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }else {
            // Contagem decrescente
            for (var c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}` //\u{1F449} unicode
            } 
        }
        res.innerHTML += `\u{1F3C1}`
    }
}