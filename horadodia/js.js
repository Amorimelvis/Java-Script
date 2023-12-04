

function carregar(){
    var fra = document.getElementById("fra")
    var msg = document.getElementById("msg")
    var imagen = document.getElementById("imagen")
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    
    
    msg.innerHTML=`Agora são: ${hora}h${minutos} minutos.`

    if(hora > 0 && hora < 12){
        //BOM DIA
        imagen.src = "imagens/foto-dia.png"
        document.body.style.background = "#F2A71B"
        fra.innerHTML = ("Bom dia!")
        

    }else if (hora >= 12 && hora < 18){
        //Boa tarde!
        imagen.src = "imagens/foto-tarde.png"
        document.body.style.background = "#A5A692"
        fra.innerHTML = ("Boa Tarde!")
    }else{
        // Boa noite!
        imagen.src = "imagens/foto-noite.png"
        document.body.style.background = "#011F26"
        fra.innerHTML = ("Boa Noite!")
    }
}