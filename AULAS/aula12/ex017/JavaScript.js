function tabuada() {
   let num = document.getElementById("txtn");
   let tab = document.getElementById("selatb");
 
   if (num.value.length == 0 || isNaN(num.value)) {
     alert("Digite um número válido");
   } else {
     let n = Number(num.value);
     let c = 1;
 
     // Limpa o conteúdo anterior do elemento 'selatb'
     tab.innerHTML = "";
 
     while (c <= 10) {
       // Cria um elemento 'option' para cada linha da tabuada
       let item = document.createElement("option");
       item.text = `${n} x ${c} = ${n * c}`;
       item.value = `tab${c}`;
 
       // Adiciona o elemento 'item' como filho do elemento 'selatb'
       tab.appendChild(item);
 
       c++;
     }
   }
 }
 
