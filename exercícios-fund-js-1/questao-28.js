console.log(" \n28)Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.\n\n")

//Minha solução

function parImpar(vetor){
    let contaPar = 0
    let contaImpar = 0

    for(let i = 0; i < vetor.length; i++){

        if((vetor[i] % 2) == 0){
            contaPar++
        }else{
            contaImpar++
        }

    }

    console.log(`A quantidade de números pares são ${contaPar}. Já a quantidade de impares são ${contaImpar}.`)
}

const vetor = [10, 2, 21, 1996, 3, 19, 2020]

parImpar(vetor)