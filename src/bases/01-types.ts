export let name: string = 'Santiago'
export const age: number = 30
export const isValid: boolean = true

name = 'Andrea'

export const templateString = `Este es un string
multilinea
que puede tener
" doble
' simple
inyectar valores: ${name}
expresiones: ${1 + 1}
numeros: ${age}
booleanos: ${isValid}`

console.log(templateString)
