
console.log(  " \n16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe\n"
            + "como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores\n"
            + "numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e\n"
            + "3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.\n\n" )

//minha solucao 

function calculadora(primario, operacao, secundario){
    switch(operacao){
        case "+":
            return primario + secundario

        case "-":
            return primario - secundario

        case "*": 
            return primario * secundario
        
        case "/":
            return primario / secundario

        default:
            return "Operação inválida!"
    }
}

console.log(calculadora(1, "+", 2))
console.log(calculadora(3, "-", 5))
console.log(calculadora(2, "*", 2))
console.log(calculadora(0, "/", 2))
console.log(calculadora(0, "**", 2))