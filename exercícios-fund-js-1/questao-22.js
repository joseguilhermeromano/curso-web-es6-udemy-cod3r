console.log(  " \n22)​ Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como"
            + " parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro...) que foi paga e o valor da anuidade. A"
            + " anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros"
            + " compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.\n\n")

//Minha solução

const calcularJurosCompostos = (capital, taxa, tempoAplicacao) => (capital * ((1 + (taxa/100)) ** tempoAplicacao)).toFixed(2) 

function calcularAnuidade(mes, valor){

    if(mes >= 1 || mes <= 12){
        let atraso = mes - 1
        return calcularJurosCompostos(valor, 5, atraso)
    }else{
        return "O mês informado é inválido"
    }
}

console.log(calcularAnuidade(4, 100))