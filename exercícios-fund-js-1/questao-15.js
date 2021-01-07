
console.log(  " \n15) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda\n"
            + "possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o\n"
            + "comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza\n"    
            + "que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:\n"
            + "“Não trabalhamos com este tipo de automóvel aqui”.\n\n" )

//minha solucao 

function venderAutomovel(automovel){
    switch(automovel){
        case "hatch":
            console.log("compra efetuada com sucesso!")
            break

        case "sedans": case "motocicletas": case "caminhonetes":
            console.log("Tem certeza que não prefere este modelo?")
            break

        default:
            console.log("Não trabalhamos com este tipo de automóvel aqui")
    }
}

venderAutomovel("hatch")
venderAutomovel("sedans")
venderAutomovel("motocicletas")
venderAutomovel("caminhonetes")
venderAutomovel("fusca")