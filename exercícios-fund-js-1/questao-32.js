console.log(" \n32)​ Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.\n\n")

//Minha solução

function calcularMedia(vetor){

    let media = 0

    for(let i = 0; i < vetor.length; i++){
        media += vetor[i]
    }

    return media / vetor.length

}


console.log("A média é ", calcularMedia([1, 2, 3,  4, 5]))