const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data


    //minha solucao
    const somenteMulheresChinesas = (f) => { 
        if(f.genero == 'F' && f.pais == 'China'){
            return f.salario
        }
    }
    
    const mulheresChinesasOrdenadas = funcionarios.filter(somenteMulheresChinesas).sort((chinesaA, chinesaB) => chinesaA.salario - chinesaB.salario)

    const mulherChinesaComMenorSalario = mulheresChinesasOrdenadas[0]

    // console.log(mulherChinesaComMenorSalario)

    //solucao professor

    const chineses = f => f.pais == 'China'
    const mulheres = f => f.genero == 'F'
    const menorSalario = (func, funcAtual) => {
        return func.salario < funcAtual.salario ? func : funcAtual
    }

    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

        console.log(func)

})