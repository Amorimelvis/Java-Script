function calculate() {
    const amount = parseFloat(document.getElementById("amount").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value);
    const months = parseInt(document.getElementById("months").value);

    if (isNaN(amount) || isNaN(interestRate) || isNaN(months)) {
        document.getElementById("result").innerHTML = "Por favor, preencha todos os campos corretamente.";
    } else {
        const monthlyInterestRate = interestRate / 12 / 100;
        const monthlyPayment = (amount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -months));
        const totalPayment = monthlyPayment * months;

        document.getElementById("result").innerHTML = `
            Pagamento mensal: R$ ${monthlyPayment.toFixed(2)}
            Pagamento total: R$ ${totalPayment.toFixed(2}
        `;
    }
}
