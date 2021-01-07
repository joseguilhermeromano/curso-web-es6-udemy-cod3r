console.log(" \n36) ​ Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número"
            + " inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada"
            + " elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se"
            + " o valor do elemento for maior que 5.\n\n")

//Minha solução

function f1(vetor, num){
    let newVetor = []

    for(let i = 0; i < vetor.length; i++){
        newVetor[i] = vetor[i] * num
    }

    return newVetor
}

function f2(vetor, num){

    let newVetor = []

    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] > 5){
            //newVetor[i] = vetor[i] * num  -> dá erro
            newVetor.push((vetor[i] * num)) // forma correta de fazer em js
        }
    }

    return newVetor
}


console.log(f1([1, 2, 3, 4, 5, 6, 7, 8, 9], 10), f2([1, 2, 3, 4, 5, 6, 7, 8, 9], 10))