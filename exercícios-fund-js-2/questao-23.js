const enunciado = `23)Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.

Considere que todas as palavras só são separadas por um espaço.
Exemplos:
contarPalavras("Sou uma frase") // retornará 3
contarPalavras("Me divirto aprendendo a programar") // retornará 5`

console.log(enunciado)

//Minha solução

const contarPalavras = string => string.split(' ').length

console.log(contarPalavras("Sou uma frase"))
console.log(contarPalavras("Me divirto aprendendo a programar"))