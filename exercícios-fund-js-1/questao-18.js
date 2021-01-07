
console.log(  " \n18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando\n"
            + "switch. Crie um case default que escreva ‘Número fora do intervalo.\n\n" )

//minha solucao 

function numeroPorExtenso(num){

    switch(num){

        case 0: return "zero"
        case 1: return "um"
        case 2: return "dois"
        case 3: return "tres"
        case 4: return "quatro"
        case 5: return "cinco"
        case 6: return "seis"
        case 7: return "sete"
        case 8: return "oito"
        case 9: return "nove"
        case 10: return "dez"

        default: 
            return "Número fora do intervalo"
    }
}

console.log(numeroPorExtenso(9))
console.log(numeroPorExtenso(12))