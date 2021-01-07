const pilotos = ['Vettel', 'Alonso', 'Raikkonem', 'Massa']
pilotos.pop() // remove o último elemento do array

console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove a primeira posição 
console.log(pilotos)

pilotos.unshift('Hamilton') // insere antes do primeiro elemento mantendo o conteudo e ordem.
console.log(pilotos)

// splice pode adicionar e remover elementos

//adicionar 
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1) // removendo Massa novamente
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // gera novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)