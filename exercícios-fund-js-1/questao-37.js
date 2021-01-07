console.log(" \n37) ​ Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam"
            + " como parâmetros um número n (número de termo), ​ a1 ​ (o primeiro termo) e ​ r ​ (a razão) e escreva os ​ n ​ termos ,"
            + " bem como a soma dos elementos.\n\n")

//Minha solução

const calcularAnPa = (a1, n, r) => (a1 + ((n - 1) * r))

function pa(n, a1, r){

    for(let i = 1; i <= n; i++){
        console.log(calcularAnPa(a1, i, r))
    }

    s = ((a1 + calcularAnPa(a1, n, r)) * n) / 2

    console.log(`O Resultado da soma dos elementos é ${s}.`)
}

pa(500, 0, 1)

const calcularAnPg = (a1, n, q) => (a1 * (q**(n-1)))

console.log("-----------------------------------")

function pg(n, a1, r){

    for(let i = 1; i <= n; i++){
        console.log(calcularAnPg(a1, i, r))
    }

    s = (a1 * ((r**n) - 1)) / (r - 1)

    console.log(`O Resultado da soma dos elementos é ${s}.`)

}

pg(10, 3, 2)