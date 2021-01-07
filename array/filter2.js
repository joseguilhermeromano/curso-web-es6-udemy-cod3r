const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

//minha solucao

Array.prototype.filter2 = function (callback){

    const newArray = []
    let boolean 

    for (let i = 0; i < this.length; i++ ){

        boolean = callback(this[i], i, this)

        if(boolean === true){
            newArray.push(this[i])
        }

    }

    return newArray
}

const maiorQuinhentos = p => p.preco >= 500
const isFragil = p => p.fragil

const resultado = produtos.filter2(maiorQuinhentos).filter2(isFragil)
console.log(resultado)

//solucao professor

Array.prototype.filter3 = function (callback){

    const newArray = [] 

    for (let i = 0; i < this.length; i++ ){

        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }

    }

    return newArray
}

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil 
console.log(produtos.filter3(caro).filter3(fragil))

