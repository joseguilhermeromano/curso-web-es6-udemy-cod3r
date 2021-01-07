
console.log(  " \n14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três\n"
            + "casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com\n"
            + "escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie\n"
            + "também um default, que retornará uma mensagem de erro no console.\n\n" )

//minha solucao 

function comprarFrutas(fruta){
    switch(fruta){
        case "maçã": 
            console.log("Não vendemos essa fruta aqui!")
            break

        case "kiwi":
            console.log("Estamos com escassez de Kiwis!")
            break

        case "melancia":
            console.log("Aqui está, são 3 reais o quilo.")
            break

        default: 
            console.log("Fruta inválida!")
    }
}

comprarFrutas("maçã")
comprarFrutas("kiwi")
comprarFrutas("melancia")
comprarFrutas("maca")