function teste() {
    let cliente = document.getElementById("cliente").value;
    let devedor = parseFloat(document.getElementById("dev").value);
    let divida = parseFloat(document.getElementById("valor").value);
    let res = document.getElementById("res");

    if (devedor >= divida) {
        res.innerHTML = `O cliente ${cliente} pagou e quitou sua dívida`;
    } else {
        res.innerHTML = "Não tem dinheiro suficiente";
        res.innerHTML += "<br>FALTA PAGAR: " + (divida - devedor);
    }

    if (devedor > divida) {
        let saldo = devedor - divida;
        res.innerHTML += `<br>Pagou e está com saldo positivo de: ${saldo} reais`;
    }
}



