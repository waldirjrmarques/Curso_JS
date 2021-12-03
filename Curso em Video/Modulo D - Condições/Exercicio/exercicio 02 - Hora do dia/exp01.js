// function xxx()  see coloca para carregar os comandos ao fazer determinada situacao.
function carregar() {
   
    var clima = window.document.getElementById('clima') // comando para colocar uma variavel de j.s no html
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem') 
    var hora1 = new Date() // procedimento obridatorio para Obtém a data/hora atual
    var hora = hora1.getHours() // comando para obter a hora 
    //var hora = 2
    var minuto1 = new Date()  // procedimento obridatorio para Obtém a data/hora atual
    var minuto = minuto1.getMinutes()  // comando para obter os minutos
    
    msg.innerHTML = `Agora  sao <strong>${hora}:${minuto}</strong> horas.`
    
    if (hora >= 0 && hora < 12){
        //bom dia 
        clima.innerHTML = `Bom Dia!`
        img.src = `imagens/dia.png`
        document.body.style.background = `rgb(168, 197, 219)` 
    }else if (hora >= 12 && hora <= 18) {
       // boa tarde
       clima.innerHTML = `Boa Tarde!`
       img.src = `imagens/tarde.png`
       document.body.style.background = `#e46409`
    }else {
        //boa noite
        clima.innerHTML = `Boa Noite!`
        img.src = `imagens/noite.png`
        document.div.style.background = `#1f2120`
    }
}

