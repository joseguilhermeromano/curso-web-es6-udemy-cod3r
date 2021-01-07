const enunciado = `26)Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
consoantes, ou seja, sem as vogais.
Exemplos:
removerVogais("Cod3r") // retornará "Cd3r"
removerVogais("Fundamentos") // retornará "Fndmnts"`

console.log(enunciado)

//Minha solução

const vogais = ['a', 'e', 'i', 'o', 'u']
const removerVogais = (str) => str.split('').filter((elem) => !vogais.includes(elem))

console.log(removerVogais("Cod3r"))
console.log(removerVogais("Fundamentos"))