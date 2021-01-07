const enunciado = `8)Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação.
Exemplo:
multiplicar(5, 5) // retornará 25
multiplicar(0, 7) // retornará 0`

console.log(enunciado)

//Minha solução

function multiplicar(a, b){

    if( a < 0 || b < 0){
        return 'Informar somente numeros maior ou igual a zero.'
    }

    return Math.floor((a / (1/b)))
}

console.log(multiplicar(5, 5))
console.log(multiplicar(0, 7))