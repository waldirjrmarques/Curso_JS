//alert (`teste`)
function tabuada() {
    var numero = document.getElementById(`txtn`)
    var tab  = document.getElementById(`seltab`)
   

    if (numero.value.length == 0){
        alert (`[ERRO] Digite um Numero`)
    }else{
        var n = Number(numero.value) // tranforma a informacao em numero para poder fazer calculos 
        
        var c = 1
        tab.innerHTML = `` // limpa as informacoes dentro da variavale tab 
        while(c <= 10){
            var item = document.createElement(`option`) // cria uma teg no html
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item) // mostra a teg criada
            c++
        }
        
        
    }
}