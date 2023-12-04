function carregar(){
 var msg = document.getElementById("msg")
 var imag = document.getElementById("imagem")
 var data = new Date()
 var hora = data.getHours()
 
 msg.innerHTML = ` Agora são <strong>${hora}</strong> horas`

 if (hora >= 0 && hora < 12) {
    //Bom dia
    imag.src= "foto-dia.png"
 } else if (hora >= 12 && hora < 18 ){
    // Boa tarde
    imag.src = "foto-tarde.png"
 }else{
    // Boa noite
    imag.src = "foto-noite.png"
 }

}

