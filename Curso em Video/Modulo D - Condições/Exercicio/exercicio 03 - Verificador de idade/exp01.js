function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    
    var fano = document.getElementById(`txt`) // atrubuir uma variavel a string
    var ffano =  Number(fano.value) // tranformar  o input string em number 
   
    var res = document.getElementById(`res`)
    
    if (ffano == 0 || ffano > ano){
        window.alert(`[ERRO] Verifique os dados e tente novamente!`)
    }else{
        var fsex = document.getElementsByName(`radsex`)
        var idade = ano - ffano
        //res.innerHTML = ` ${} 
        var genero = ` `
        
        var img = document.createElement(`img`) // `cria` uma teg no html
        img.setAttribute(`id`,`foto`) // `cria` uma id para a teg img
        if(fsex[0].checked){
            genero = `Homem`
            if (idade >= 0 && idade < 10){
                //bebe 
                img.setAttribute(`src`,`bebehomem.png`)
            }else if(idade < 15 ){
                //crianca
                img.setAttribute(`src`,`criancahomem.png`)
            }else if(idade < 50){
                //adulto
                img.setAttribute(`src`,`adultohomem.png`)
            }else{
                //idoso
                img.setAttribute(`src`,`idosohomem.png`)
            }   
        }else if (fsex[1].checked){
            genero = `Mulher`
            if (idade >= 0 && idade < 10){
                //bebe 
                img.setAttribute(`src`,`bebemulher.png`)
            }else if(idade < 15 ){
                //crianca
                img.setAttribute(`src`,`criancamulher.png`)
            }else if(idade < 50){
                //adulto
                img.setAttribute(`src`,`adultomulher.png`)
            }else{
                //idoso
                img.setAttribute(`src`,`idosomulher.png`)
            }
        }

        res.style.textAlign = `center` //   centralizar a <div id="res"> com j.s
        res.innerHTML = `Detectamos ${genero} com ${idade} anos<br></br>`
        res.appendChild(img)
      
    }  
    
}