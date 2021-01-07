const enunciado = `1)Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
    função) e com ponto de exclamação "!" no final.
    
    Exemplos:
        cumprimentar("Leonardo") // retornará "Olá, Leonardo!"
        cumprimentar("Maria") // retornará "Olá, Maria!"
    `

console.log(enunciado)

//Minha solução

function concatena(text){
    const saudacao = 'Olá, '
    const exclamacao = '!'
    return saudacao.concat(text).concat(exclamacao)
}

console.log(concatena('José'))