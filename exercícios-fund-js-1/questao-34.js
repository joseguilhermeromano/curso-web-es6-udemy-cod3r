console.log(" \n34)​ Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso"
            + " todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.\n\n")

//Minha solução

function contemLetrasIguais(string1, string2){
    string1 = string1.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    string2 = string2.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")

    char1 = Array.from(string1)
    char2 = Array.from(string2)
    let retorno = true

    char1.forEach(([elem]) =>{
        if(!char2.includes(elem)){
            return retorno = false
        }
    })

    char2.forEach(([elem]) => {
        if(!char1.includes(elem)){
            return retorno = false
        }
    })

    return retorno
}

console.log(contemLetrasIguais("test", "tEsTe"))