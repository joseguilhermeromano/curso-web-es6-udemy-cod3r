
console.log(  " \n19) O cardápio de uma lanchonete é o seguinte:\n\n"
            + "|   Código  |   Descrição do Produto     |    Preço      |\n"
            + "|    100    |    Cachorro Quente         |   R$ 3,00     |\n"
            + "|    200    |    Hambúrguer Simples      |   R$ 4,00     |\n"
            + "|    300    |    Cheeseburguer           |   R$ 5,50     |\n"
            + "|    400    |    Bauru                   |   R$ 7,50     |\n"
            + "|    500    |    Refrigerante            |   R$ 3,50     |\n"
            + "|    600    |    Suco                    |   R$ 2,80     |\n\n"
            + "Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor\n"
            + "a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o\n"
            + "comando switch. Crie um caso default para produto não existente.\n\n" )

//minha solucao 

function venderLanche(codigo, qtd){

    let preco = 0.00

    switch(codigo){

        case 100:
            preco = qtd * 3
            preco = preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
            return `O valor do(s) lanche(s) é ${preco}.`
        
        case 200:
            preco = qtd * 4
            preco = preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
            return `O valor do(s) lanche(s) é ${preco}.`
        
        case 300:
            preco = qtd * 5.50
            preco = preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
            return `O valor do(s) lanche(s) é ${preco}.`

        case 400:
            preco = qtd * 7.5
            preco = preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
            return `O valor do(s) lanche(s) é ${preco}.`

        case 500:
            preco = qtd * 3.50
            preco = preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
            return `O valor do(s) lanche(s) é ${preco}.`

        case 600:
            preco = qtd * 2.80
            preco = preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
            return `O valor do(s) lanche(s) é ${preco}.`

        default: 
            return `O produto ${codigo} não existe.`
    }
}

console.log(venderLanche(100, 5))
console.log(venderLanche(200, 5))
console.log(venderLanche(300, 5))
console.log(venderLanche(400, 5))
console.log(venderLanche(500, 5))
console.log(venderLanche(600, 5))
console.log(venderLanche(700, 5))