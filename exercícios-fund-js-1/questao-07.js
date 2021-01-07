
console.log(  " \n07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,\n"
            + "elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três\n"
            + "parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,\n"
            + "-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo\n"
            + "que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:\n"
            + "“Delta é negativo”.\n\n" )

//minha solucao 

const calcularDelta = (a, b, c) => (b ** 2) + (-4 * a * c) 
const calcularX1 = (delta, a, b) => (- b + (Math.sqrt(delta))) / ( 2 * a ) 
const calcularX2 = (delta, a, b) => (- b - (Math.sqrt(delta))) / ( 2 * a ) 

function calcularBhaskara(a, b, c) {

    const delta = calcularDelta(a, b, c)

    if(delta < 0){
        return console.log("Delta é negativo!\n\n")
    }

    const resultado = []

    resultado.push(calcularX1(delta, a, b))
    resultado.push(calcularX2(delta, a, b))

    console.log(resultado)

}

calcularBhaskara(3, -5, 12) // valores informados no exercicio
calcularBhaskara(4, 2, -6) // delta positivo e negativo (valores diferentes)