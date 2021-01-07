console.log(  " \n02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:\n"
            + "Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.\n"
            + "Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto\n"
            + "ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um\n"
            + "triângulo).\n\n" )

/**
 * MINHA SOLUÇÃO
 */

function classificaTriangulo(a, b, c){

    const classificao = ["um dos valores informados é inválido.","Não é triângulo!","Equilátero", "Isóceles", "Escaleno"]

    switch(true){

        case (isNaN(a) || isNaN(b) || isNaN(c)):
        return classificao[0]

        case (a == 0 || b == 0 || c == 0):
        return classificao[1]

        case (a == b && b == c && c == a): 
        return classificao[2]

        case (a == b || b == c || c == a): 
        return classificao[3]

        case (a != b && b != c && c != a):
        return classificao[4]

    }

}

console.log("Resultados esperados: \n\n")
console.log("1. Teste com todos os lados iguais: ", classificaTriangulo(2, 2, 2))
console.log("2. Teste com dois lados iguais: ", classificaTriangulo(2, 2, 1))
console.log("3. Teste com todos os lados diferentes: ", classificaTriangulo(1, 2, 3))
console.log("4. Teste com lados inválidos: ", classificaTriangulo('a', 2, 2))
console.log("5. Teste com trinagulo inválido: ", classificaTriangulo(2, 2, '0'))

