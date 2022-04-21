function myfunction() {
    var codCliente = 1;
    var rendimento;
    var totalInvestido;
    var totalJurosPagos;

    var i = codCliente

    while (i >= 1) {

        codCliente = parseInt(prompt("Digite o Código do Cliente: (Apenas números)"));
        if (!Number.isInteger(codCliente)) {
            //console.log("Código do Cliente inválido!")
            document.write("Código do Cliente inválido!")
            //alert("Código do Cliente inválido!");
            exit;
        }

        if (codCliente <= 0) {
            //console.log("Código do Cliente inválido!")
            document.write("Código do Cliente igual a 0. Fim da execução!")
            exit;
        }

    var tipoConta = parseInt(prompt("Digite o seu Tipo de Conta: (Apenas números)"));

    if (tipoConta <= 0 || tipoConta >= 4 || !Number.isInteger(tipoConta)) {
        //console.log("Tipo de conta inválida!")
        document.write("Tipo de conta inválida!")
        exit;
    }

    var valorInvestido = parseFloat(prompt("Digite o valor que deseja investir: R$ "));

    if (tipoConta == 1) {
        rendimento = (valorInvestido * 1.5) / 100;
    } else if (tipoConta == 2) {
        rendimento = (valorInvestido * 2) / 100;
    } else if (tipoConta == 3) {
        rendimento = (valorInvestido * 4) / 100;
    }

    totalInvestido = valorInvestido + rendimento;

    //console.log("O valor total de seu CodCliente " + codCliente + " é de: R$ " + totalInvestido + " \n Total de juros: " + rendimento + "\n\n"")
    document.write("O valor total de seu CodCliente " + codCliente + " é de: R$ " + totalInvestido + " <br> Total de juros: " + rendimento + "<br><br>")
    }
}