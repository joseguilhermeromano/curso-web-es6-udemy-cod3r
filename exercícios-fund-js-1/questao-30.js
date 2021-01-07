console.log(" \n30)Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.\n\n")

//Minha solução

function menorMaior(vetor){

    let menorValor = 0.00
    let maiorValor = 0.00

    for(let i = 0; i < vetor.length; i++){

        if(vetor[i] >= maiorValor){
            maiorValor = vetor[i]
        }else if(menorValor == 0){
            menorValor = vetor[i]
        }else if(vetor[i] <= menorValor){
            menorValor = vetor[i]
        }

    }

    console.log(`O menor valor do vetor é ${menorValor.toFixed(2)}. Já o maior valor do vetor é ${maiorValor.toFixed(2)}.`)
}

menorMaior([10, 200, 9, 0.1, 99.99])