let a = 1 
console.log(a)

let p = new Promise(function (cumprirPromessa){
    //cumprirPromessa(3, 4) // aceita apenas um parametro 
    cumprirPromessa({x: 2, y: 4})
})

console.log(typeof p)
p.then(function (valor, x) {
    //console.log(valor, x)
    console.log(valor)
})

//segundo exemplo

const primeiroElemento = arrayOuString => arrayOuString[0]

const letraMinuscula = letra => letra.toLowerCase()

new Promise(cumprirPromessa => cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel']))
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log)