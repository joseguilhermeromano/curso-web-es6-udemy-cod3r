const enunciado = `29)Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.
Exemplos:
segundoMaior([12, 16, 1, 5]) // retornará 12
segundoMaior([8, 4, 5, 6]) // retornará 6`

console.log(enunciado)

//Minha solução

const valorMaximo = vetor => Math.max.apply(null, vetor)
const segundoMaior = v => Math.max.apply(null, v.filter((val) => val != valorMaximo(v)))

console.log(segundoMaior([12, 16, 1, 5]))
console.log(segundoMaior([8, 4, 5, 6]))