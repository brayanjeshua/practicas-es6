
// ES10

let array = [1,2,3, [1,2,3, [1,2,3]]]

// Se pasa el parametro de la profundidad para aplanar el Array 
console.log(array.flat(1))
console.log(array.flat(2))

// flatMap sirve para mapear arrays y hacer cualquier operacion dentro del Array
let array = [1,2,3,4,5]

// en este caso el array y devolvermos el valor y luego multiplicado.
let num = 2
console.log(array.flatMap(value => [`${value} por ${num} es ${value * num} `]))


// Trim trimStart trimEnd

let textWithSpaces = '            Hello World Jeshua          '

// We can use to trim spaces in the start or the end
console.log(textWithSpaces.trimStart().trimEnd())
console.log(textWithSpaces)


// Optional try/catch para manejo de errores

// try {

// } catch {
// error opcional
// }


// Object.fromEntries() permite transformar un arreglo a objetos

let entries = [["name", "jeshua"], ["age", 22]]
console.log(Object.fromEntries(entries))


// Regresar descripcion opcional de valores Symbol

let mySymbl = `My Symbol`
let symbol = Symbol(mySymbl)
console.log(symbol.description)