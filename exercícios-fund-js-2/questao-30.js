const enunciado = `30)Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão
num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto
com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas.
Exemplo:
recerberMelhorEstudante({
Joao: [8, 7.6, 8.9, 6], // média 7.625
Mariana: [9, 6.6, 7.9, 8], // média 7.875
Carla: [7, 7, 8, 9] // média 7.75
}) // retornará { nome: "Mariana", media: 7.875 }`

console.log(enunciado)

//Minha solução

const recerberMelhorEstudante = obj => {

    let objMax 
    let mediaMaxima = 0

    for(const attr in obj){
        let tam = obj[attr].length
        let media = (obj[attr].reduce((aux, v) => aux += v, 0)) / tam
        let newObj = {nome: attr, media: media}

        if(media > mediaMaxima){
            mediaMaxima = media
            objMax = newObj
        }
    }

    return objMax
}

console.log(recerberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9] 
}))