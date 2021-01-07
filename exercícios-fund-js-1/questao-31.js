console.log(" \n31) ​ Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor"
            + " e imprime a quantidade no console.\n\n")

//Minha solução

function getNegativos(vetor){

    let negativos = 0

    for(let i = 0; i < vetor.length; i++){

        if(vetor[i] < 0){
            negativos++
        }

    }

    console.log(`A quantidade de números negativos é ${negativos}.`)
}

getNegativos([1, -1, 0, -10, 2])