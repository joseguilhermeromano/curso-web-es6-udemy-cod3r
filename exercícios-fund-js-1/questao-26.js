console.log(" \n26)​ Fazer um programa para encontrar todos os pares entre 1 e 100.\n\n")

//Minha solução

function imprimirPares(de, ate){

    do{

        if((de % 2) == 0){
            console.log(`Número Par: ${de}`)
        }

        de++
    }while( de <= ate)
}

imprimirPares(1, 100)