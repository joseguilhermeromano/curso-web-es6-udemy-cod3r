const enunciado = `10)Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.
Exemplos:
simboloMais(2) // retornará "++"
simboloMais(4) // retornará "++++"`

console.log(enunciado)

//Minha solução

function simboloMais(qtd){
    return "+".repeat(qtd)
}

console.log(simboloMais(4))