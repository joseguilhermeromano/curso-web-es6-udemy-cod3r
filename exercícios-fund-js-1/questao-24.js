console.log(" \n24)​ Crie um programa que imprima 11 vezes a frase 'Hello World!' utilizando uma estrutura de repetição while.\n\n")

//Minha solução

function helloWorld(){
    control = 1

    do{
        console.log(`${control} Hello World!!`)
        control++
    }while(control < 12)
}

helloWorld()