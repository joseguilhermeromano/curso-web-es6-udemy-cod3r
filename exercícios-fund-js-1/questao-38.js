console.log(" \n38) ​ Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números"
            + " ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente"
            + " para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.\n\n")

//Minha solução

function imprimeImpares(inicio, fim){

    let control, i = 0

    if(fim < inicio){
        control = inicio
        inicio = fim
        fim = control
    }

    do{

        if(!((i % 2) == 0)){
            console.log(i)
        }

        i++
    }while(i <= fim)
}

imprimeImpares(100, 0)