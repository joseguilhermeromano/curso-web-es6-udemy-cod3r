
console.log(  " \n04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado\n"
            + "e o resto da divisão destes dois valores.\n\n" )

//minha solucao 

function calcularOperacao(dividendo, divisor){

    if(dividendo === undefined || divisor === undefined){
        return console.log("Um dos parametros informados é inválido.");
    }

    if(isNaN(dividendo) || isNaN(divisor)){
        return console.log("Um dos parametros informados é inválido.");
    }

    if(divisor == 0 || divisor == 0){
        return console.log("resultado indeterminado!")
    }

    console.log(`A divisão de ${dividendo} por ${divisor} é igual a ${dividendo / divisor}.\n`)
    return console.log(`O resto da divisão de ${dividendo} por ${divisor} é igual a ${dividendo % divisor}.\n`)

}

calcularOperacao(4, 2);