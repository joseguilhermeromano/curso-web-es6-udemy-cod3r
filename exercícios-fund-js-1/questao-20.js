
console.log(  " \n20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas\n"
            + "para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.\n"
            + "Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve\n"
            + "informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1\n"
            + "nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.\n\n")

//minha solucao 

function sacar(valor, resultado = []){

    let chave = 0

    switch(true){

        case valor >= 100:
            valor -= 100
            chave = 100
            break


        case valor >= 50:
            valor -= 50
            chave = 50
            break 

        case valor >= 10:
            valor -= 10
            chave = 10
            break

        case valor >= 5:
            valor -= 5
            chave = 5
            break

        case valor >= 1:
            valor -= 1
            chave = 1
            break

        default: 
            return resultado.forEach(([nota, qtd]) => {
                console.log(` ${qtd} nota(s) de R$ ${nota}. `)
            })
    }

    let elem = [chave, 1]

    if(resultado.length == 0){

        resultado.push(elem)
    }else{

        indice = resultado.findIndex((elem) => elem[0] == chave )

        if(indice >= 0){
            resultado[indice][1] += 1
        }else{
            resultado.push(elem)
        }
    }

    return sacar(valor, resultado)
}

sacar(99)
sacar(359)

/*
const notas = saque.reduce((elem, i) => {

    if(typeof elem[i] == 'undefined'){
        elem[i] = 1
    }else{
        elem[i] += 1
    }

    return elem
}, {})

//aplico ordenacao 
// const resultado = Object.keys(notas).sort((a, b) => b - a).reduce((ret,  key) => {
//     obj = new Object
//     obj[key] = notas[key]
//     ret.push(obj)
//     return ret
// }, [])

*/

