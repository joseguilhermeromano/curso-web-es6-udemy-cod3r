console.log(" \n40) ​ Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de"
            + " modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o"
            + " conceito B e de 9,0 a 10,0 o conceito A.\n\n")

//Minha solução

notas = [0.1, 2.8, 4.5, 6.8, 9.1, 10, 7.1, 100];

function getConceitos(notas){
    notas.forEach((nota) => {
        switch(true){
            case nota >= 0.0 && nota <= 4.9:
                console.log(`A nota informada (${nota}) tem conceito D.`)
                break

            case nota >= 5 && nota <= 6.9:
                console.log(`A nota informada (${nota}) tem conceito C.`)
                break

            case nota >= 7 && nota <= 8.9:
                console.log(`A nota informada (${nota}) tem conceito B.`)
                break

            case nota >= 9 && nota <= 10:
                console.log(`A nota informada (${nota}) tem conceito A.`)
                break

            default:
                console.log(`A nota informada (${nota}) é inválida.`)
        }
    })
}

getConceitos(notas)