
console.log(  " \n13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao\n"
            + "dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.\n\n" )

//minha solucao 

function tipoDia(dia){
    switch(dia){
        case 1: case 7: 
            console.log("É final de semana!")
            break
        
        case 2: case 3: case 4: case 5: case 6: 
            console.log("É dia útil!")
            break
        
        default: 
            console.log("Dia inválido!")
    }
}

tipoDia(5)