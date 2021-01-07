
console.log(  " \n06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A\n"
            + "primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda\n"
            + "retornará o valor da aplicação sob o regime de juros compostos\n\n" )

//minha solucao 

const calcularJurosSimples = (capital, taxa, tempoAplicacao) => (capital * (taxa/100) * tempoAplicacao).toFixed(2)
const calcularJurosCompostos = (capital, taxa, tempoAplicacao) => (capital * ((1 + (taxa/100)) ** tempoAplicacao)).toFixed(2) 

console.log(calcularJurosSimples(10000.00, 1.00, 1), calcularJurosCompostos(10000.00, 1.00, 3))