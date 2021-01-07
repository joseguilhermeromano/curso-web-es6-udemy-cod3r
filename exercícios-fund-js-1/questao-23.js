console.log(  " \n23)​ Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do"
            + " aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do"
            + " aluno, suas três notas, a média calculada e uma mensagem 'APROVADO' se a média for maior ou igual a 5 e"
            + " 'REPROVADO' se a média for menor que 5. Repita a operação até que o código lido seja negativo.\n\n")

//Minha solução

function calcularMedia(codigo, n1, n2, n3){

    const notas = [n1, n2, n3]
    notas.sort((a,b) => b > a ? 1 : -1)
    let media, situacao = 0

    do {

        media = (notas.map( val => val == notas[0] ? val * 4 : val * 3).reduce((a,b) => a + b, 0)) / 10
        situacao = media >= 5 ? "APROVADO" : "REPROVADO"

        console.log(`O Aluno (CÓDIGO: ${codigo}, NOTA 1: ${n1}, NOTA 2: ${n2}, NOTA 3: ${n3}, MEDIA: ${media}, SITUAÇÃO: ${situacao}) `)

        codigo--
    } while (codigo > -1)

}

calcularMedia(10, 2.8, 6, 3.5)