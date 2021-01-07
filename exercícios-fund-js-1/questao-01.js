console.log(" \n01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,\n"
            + "multiplicação e divisão desses valores. \n")

/**
 * MINHA SOLUÇÃO
 */

function calculadora(a, b){
     const soma = a + b
     const subtracao =  a - b
     const multiplicacao = a * b 
     const divisao = a / b
     
     console.log(`Resultados esperados: \n\n`)
     console.log(`1. Soma de ${a} + ${b} = ${soma.toFixed(2)} \n`)
     console.log(`2. Subtração de ${a} - ${b} = ${subtracao.toFixed(2)}\n`)
     console.log(`3. Multiplicação de ${a} x ${b} = ${multiplicacao.toFixed(2)}\n`)
     console.log(`4. Divisão de ${a} ÷ ${b} = ${divisao.toFixed(2)}\n\n`)
}

calculadora(5.99, 3.3333)