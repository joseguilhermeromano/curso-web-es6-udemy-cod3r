
console.log(  " \n09) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de\n"
            + "classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas\n"
            + "possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor\n"
            + "que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum\n"
            + "arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para\n"
            + "85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou\n"
            + "seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40\n"
            + "e o aluno será aprovado.\n\n")

//minha solucao 

const isNumeric = number => !isNaN(number)
// const multiplosDeCinco = (limite, retorno = []) => {

//     if(limite == 0){
//         return retorno
//     }else{
//         retorno.push(limite)
//         limite -= 5
//         return multiplosDeCinco(limite, retorno)
//     }

// }

const multiplosDeCinco = (limite, retorno = []) => limite == 0 ? retorno : multiplosDeCinco((limite - 5), retorno.concat(limite))
let multiplos = multiplosDeCinco(100)
multiplos.sort( (a,b) => a - b )

function avaliarAluno(nota){

    if(!isNumeric(nota)){
        return console.log(`A nota ${nota} é inválida.`)
    }

    nota = Number(nota)

    if(nota < 38){
        return console.log('Aluno reprovado!')
    }

    let proximoMultiplo = multiplos.find( valor => valor > nota )

    let diferenca = proximoMultiplo - nota

    if(diferenca < 3){
        return console.log(`Aluno Aprovado! Nota arredondada de ${nota} para ${nota + diferenca}.`)
    }

    return console.log(`Aluno Aprovado! A nota não foi arredondada. `)
}

avaliarAluno(38)