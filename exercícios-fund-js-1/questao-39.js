console.log(" \n39) ​ Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o"
            + " primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente."
            + " Faça a troca sem utilizar uma variável auxiliar.\n\n")

//Minha solução

function trocaVetores(a, b){
    let tamA = a.length
    let tamB = b.length

    let tam = tamA > tamB ? tamA : tamB

    for(let i = 0; i < tam; i++){

        if(i < tamB){
            a.push(b[0])
            b.shift()
        }

        if(i < tamA){
            b.push(a[0])
            a.shift()
        }
    }

    console.log("O novo resultado é ",a, b)
}

const a = [1, 2, 3]
const b = [4, 5, 6, 7]

console.log(a, b)

trocaVetores(a, b)