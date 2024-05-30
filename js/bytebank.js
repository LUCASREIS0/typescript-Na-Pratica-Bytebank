let saldo = 300;

const elementoSaldo = document.querySelector(".saldo-valor .valor")
elementoSaldo.textContent = saldo;

const elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", function(event) {
    event.preventDefault();

    // Verificando se o formulário é válido (se todos os campos requeridos são preenchidos "checkValidity()")
    if(!elementoFormulario.checkValidity()){
        alert("por favor preencha todos os campos da transação!");
        return;
    }

    //Obtendo os elementos
    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
    const inputValor = elementoFormulario.querySelector("#valor");
    const inputData = elementoFormulario.querySelector("#data");

    //Obtendo o valor dos elementos
    let tipoTransicao = inputTipoTransacao.value;
    let valor = inputValor.value;
    let data = inputData.value;

    if (tipoTransicao == "Depósito") {
        saldo += valor;
    } else if  (tipoTransicao == "Transferência" || tipoTransicao == "pagamento de Boleto") {
        saldo -= valor;
    } else {
        alert("Tipo de trasação é ivalido!");
        return;
    }

    // Atualiza o saldo mostrado na tela com o novo valor
    elementoSaldo.textContent = saldo; 

    //Criando o objeto de "novaTransação"
    const novaTransacao = {
        tipoTransicao : tipoTransicao,
        valor: valor,
        data: data
    }

    console.log(novaTransacao);

    //Reseteando formulario uma vez que já recebeu os dados da nova transação 
    elementoFormulario.reset();
});