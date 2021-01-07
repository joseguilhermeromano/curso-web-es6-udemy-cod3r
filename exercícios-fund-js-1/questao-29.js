console.log(" \n29) ​ Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números"
            + " deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos"
            + " deles estão fora do intervalo, escrevendo estas informações.\n\n")

//Minha solução

function analisaVetor(vetor, intervalo){

    let contaInter = 0
    let contaFora = 0

    for(let i = 0; i < vetor.length; i++){

        if(vetor[i] >= intervalo[0] && vetor[i] <= intervalo[1]){
            contaInter++
        }else{
            contaFora++
        }

    }

    console.log(`A quantidade de numeros entre os intervalos são ${contaInter} e a quantidade fora são ${contaFora}.`)
}

analisaVetor([10, 1, 100, 40, 19.9], [10, 20])