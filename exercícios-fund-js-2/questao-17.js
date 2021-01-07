const enunciado = `17)Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
Exemplos:
somarNumeros([10, 10, 10]) // retornará 30
somarNumeros([15, 15, 15, 15]) // retornará 60`

console.log(enunciado)

//Minha solução

function somarNumeros(vetor){
    return vetor.reduce((aux, val) => aux += val,0)
}

const vetor1 = [10, 10, 10]
const vetor2 = [15, 15, 15, 15]

console.log(somarNumeros(vetor1))
console.log(somarNumeros(vetor2))