const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.5 }'
]

//Solução professor

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)

// Minha solução 

//minha solução para map2
Array.prototype.map2 = function (callback){

    let retorno = [];

    for (let i = 0; i < this.length; i++){
        retorno.push(callback(this[i], i , this))
    }

    return retorno
}

const paraObjeto2 = json => JSON.parse(json)
const apenasPreco2 = produto => produto.preco

const resultado2 = carrinho.map2(paraObjeto2).map2(apenasPreco2)
console.log(resultado2)

// Solução do Professor 

Array.prototype.map3 = function (callback){

    const newArray = [];

    for (let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }

    return newArray
}

const paraObjeto3 = json => JSON.parse(json)
const apenasPreco3 = produto => produto.preco

const resultado3 = carrinho.map3(paraObjeto3).map3(apenasPreco3)
console.log(resultado3)