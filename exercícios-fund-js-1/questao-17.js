
console.log(  " \n17) Um funcionário irá receber um aumento de acordo com o seu plano de\n"
            + "trabalho, de acordo com a tabela abaixo:\n\n"
            + "| Plano  |  Aumento  |\n"
            + "|    A   |    10%    |\n"
            + "|    B   |    15%    |\n"
            + "|    C   |    20%    |\n\n"
            + "Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu\n"
            + "novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.\n\n" )

//minha solucao 

function calculaSalario(plano, salarioAtual){

    switch(plano){
        case "A": 
            return  (((salarioAtual / 100) * 10) + salarioAtual)

        case "B": 
            return  (((salarioAtual / 100) * 15) + salarioAtual)

        case "C": 
            return  (((salarioAtual / 100) * 20) + salarioAtual)

        default:
            return "Plano Inválido"
    }

}

console.log(calculaSalario("A", 3250.00))
console.log(calculaSalario("B", 3250.00))
console.log(calculaSalario("C", 3250.00))
console.log(calculaSalario("D", 3250.00))