
console.log(  " \n12) Faça um algoritmo que calcule o fatorial de um número.\n\n" )

//minha solucao 

const f = n => (n == 0 || n == 1) ? 1 : n * f(n-1)

console.log(f(10))