function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {

        try{
            con.log('temp')
            if(Math.random() < chanceErro){
                reject(`Ocorreu um erro!`)
            }else{
                resolve(valor)
            }
        }catch(e){
            reject(e)
        }

    })
}

funcionarOuNao('Testando...', 0.5)
    .then(v => console.log(`Valor: ${v}`))
    .then(v => consol.log,
        err => console.log(`Erro esp: ${err}`))
    .then(()=> console.log('Quase fim!'))
    .catch(err => console.log(`Erro Geral: ${err}`))
    .then(() => console.log('Fim!'))