const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.5 }'
]

// Retornar um array apenas com os preços


// Minha solução 
const precos = [];
carrinho.forEach(function(json) {
    let produto = JSON.parse(json);
    precos.push(produto.preco)
})

console.log(precos)

//Solução professor

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)