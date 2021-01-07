
console.log(  " \n08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém\n"
            + "registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o\n"
            + "mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2\n"
            + "pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um\n"
            + "vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior\n"
            + "jogo. (Número do pior jogo).\n\n" 
            + "Obs.: O primeiro jogo não conta como novo recorde do melhor.\n"
            + "Exemplo:\n\n"
            + "String: “10 20 20 8 25 3 0 30 1”\n"
            + "Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação\n"
            + "aconteceu no sétimo jogo.)\n\n")

//minha solucao 

function jogos(pontuacoes){

    const resultados = pontuacoes.split(" ").map( Number ) // importante para os if dentro do for
    let recorde = resultados[0]
    let piorPontuacao = resultados[0]
    let qtdRecorde = 0
    let indicePiorPontuacao = 0

    for( let i = 0; i < resultados.length; i++ ){

        //resultados[i] deve ser convertido para inteiro (Number)
        //antes de fazer esse tipo de verificação
        //caso contrário dá falha na verificação
        if( resultados[i] > recorde ){
            qtdRecorde++
            recorde = resultados[i]
        }else if( resultados[i] < piorPontuacao ){
            piorPontuacao = resultados[i]
            indicePiorPontuacao = i + 1
        }

    }

    return [qtdRecorde, indicePiorPontuacao]
}

console.log("O Resultado do exercício é ")

let stringPontuacoes = "10 20 20 8 25 3 0 30 1"
console.log(jogos(stringPontuacoes))

stringPontuacoes = "30 40 20 4 51 25 42 38 56 0"
console.log(jogos(stringPontuacoes))