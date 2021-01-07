console.log(" \n27)​ Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas"
            + " crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em"
            + " quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.\n\n")

//Minha solução


function calcularCrescimento(altura1, taxa1, altura2, taxa2){

    let tempo = 0

    switch(true){
        case altura1 == altura2 && taxa1 == taxa2:
            return "As crianças tem a mesma altura e mesmo crescimento. Nenhuma irá ultrapassar ao longo dos anos."

        case altura1 > altura2 && taxa2 >= taxa1:
            tempo = calcularTempo(altura1, taxa1, altura2, taxa2)
            return `A criança de altura ${altura2} cm, ultrapassará a outra ${altura1} cm em ${tempo} anos.`

        case altura2 > altura1 && taxa1 >= taxa2:
            tempo = calcularTempo(altura2, taxa2, altura1, taxa1)
            return `A criança de altura ${altura1} cm, ultrapassará a outra ${altura2} cm em ${tempo} anos.`

        default:
            return `A Criança menor não ultrapassará a maior.`
    }
}

function calcularTempo(alturaMaior, taxaMaior, alturaMenor, taxaMenor){

    let anos = 0

    do{
        alturaMenor += taxaMenor
        alturaMaior += taxaMaior

        anos ++
    }while(alturaMenor < alturaMaior)

    return anos
}

console.log(calcularCrescimento(150, 2, 130, 4))
console.log(calcularCrescimento(150, 4, 110, 2))
console.log(calcularCrescimento(150, 4, 150, 4))

