var a = document.getElementById("area")

a.addEventListener("click", clicar)
a.addEventListener("mouseenter", entrou)
a.addEventListener("mouseout", saiu)


function clicar(){
    a.innerHTML = ("Clicou")
    location.href = "https://estudante.estacio.br/disciplinas/estacio_10149921/temas/2/conteudos/1"
    
    }

function entrou(){
    a.innerHTML = ("entrou")
    a.style.background = "blue"
    
}

function saiu(){
a.innerHTML = ("INTEREJA....")
a.style.background = "red"

}