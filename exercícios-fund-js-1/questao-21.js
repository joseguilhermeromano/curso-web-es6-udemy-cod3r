console.log(  " \n21)​ Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado"
            + " considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos"
            + " de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com"
            + " idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130\n\n")

//Minha solução

function venderPlano(idade){

    valor = 100 
    
    switch(true){
        case idade < 10: 
            return valor += 80

        case idade >= 10 && idade < 30:
            return valor += 50

        case idade >= 30 && idade <= 60:
            return valor += 95

        case idade > 60:
            return valor += 130

        default:
            return "Opção inválida." 
    }
}

console.log(venderPlano(24))