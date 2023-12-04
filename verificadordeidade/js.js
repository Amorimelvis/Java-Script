function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("textano")
    var res = document.getElementById ("res")
    if (fano.value.length == 0 || Number(fano.value) > ano){
        alert("[ERRO] Verifique os dados digitados")
    }else{
        var fsex = document.getElementsByName("rsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        if(fsex[0].checked){
            genero = "Homem"
            if(idade >= 0 && idade < 10){

                var foto = document.getElementById("foto")
        
            }else if( idade > 10 && idade <= 21){
                //adolecescente
            }else if(idade < 50){
                //adulto
            }else {
                //idoso
            }
            res.innerHTML = `vc é ${genero} com ${idade} anos`
            



        }else if (fsex[1].checked){
            genero = "Mulher"
        }
        
    }



}
    