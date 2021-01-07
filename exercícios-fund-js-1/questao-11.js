
console.log(  " \n11) As regras para o cálculo dos anos bissextos são as seguintes:\n"
            + "De 4 em 4 anos é ano bissexto;\n"
            + "De 100 em 100 anos não é ano bissexto;\n"
            + "De 400 em 400 anos é ano bissexto;\n"
            + "Prevalecem as últimas regras sobre as primeiras.\n"
            + "Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a\n"
            + "mensagem e retornando true ou false.\n\n")

//minha solucao 

const isBissexto = ano => {
    resto = ano % 400 

    if(resto == 0)
        return true

    resto = ano % 100

    if(resto == 0)
        return false

    resto = ano % 4

    if(resto == 0)
        return true

    return false
}

let ano = 1996

console.log(`O ano de ${ano} é bissexto? `, isBissexto(ano))
