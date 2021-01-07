const enunciado = `27)Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao
ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme
exemplo a seguir:
Exemplo:
inverter({ a: 1, b: 2, c: 3}) // retornará { 1: "a", 2: "b", 3: "c"}`

console.log(enunciado)

//Minha solução

const paresInvertidos = obj => Object.entries(obj).map( (valor) => valor.reverse() )

const inverter = obj => Object.fromEntries(paresInvertidos(obj))

console.log(inverter({ a: 1, b: 2, c: 3}))