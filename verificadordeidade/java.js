function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var idade = document.getElementById("txtano").value;
    var res = document.getElementById("res")
    if(idade.length == 0 || Number(idade) > ano){
        alert("Verifique os dados digitados e tente novamente")
    }
    else{
        var sex = document.getElementById("radsex")
        var nas  = ano - Number(idade)
        var genero = ""
       
        if(sex[1].checked){
            genero = "Homem"
            if(nas >= 0 && nas < 10){

            }

        }
     }
    res.innerHTML = `Você é ${genero} com ${idade} anos`
    
    }

