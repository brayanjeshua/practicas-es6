// Variables in Javascript Let & Const

let person = {
    name: 'Jeshua',
    age: 22,
    country: 'Italy'
}

// Before in JS
// console.log(person.name)

// Destructuring
let {name, country, age} = person;
console.log (`${name} is from ${country} have ${age} years`)

// Spread Operation
let team1 = ['Jeshua', 'Oscar', 'Angelo']
let team2 = ['Angie', 'Jessica', 'Maria']

// Unir elementos en un Array
let education = ['David', ...team1, ...team2]
console.log(education)


// Entendiendo Scope

{
    var globalVar = "Global Var"
}

{
    let globalLet = "Global Let"
    console.log(globalLet)
}

// Aqui es accesible Var y no Let

console.log(globalVar)


// Constants

const a = 'El Valor de A';

// Es imposible cambiar el valor de una constante
// a = 'El Valor de B'

console.log(a)

// Parametros de Objetos

let name = 'jeshua'
let age = 22

// Before ES5
obj = { name: name, age: age }
console.log(obj)

// ES6
obj2 = { name, age }
console.log(obj2)


// Arrow Functions- Syntax reducida (Objeto con Arrays)

const names = [
    { name: 'Jeshua', age:22 },
    { name: 'Angie', age:20 }
]



// Before using map to print 

// let listOfNames = names.map(function(item){
//     console.log(item.name)
// })

// Using Arrow Functions

let listOfNames2 = names.map(item => console.log(item.name))

// 2

// let listOfNames3 = (name, age ) => {
//     ...
// }

// 3

// let listOfNames4 = name => {
//     ...
// }

// 4

// const square = num => num * num


// Promises

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        // Handle Promises change true or false
        if (true) {
            resolve('¡Hey!')
        } else {
            reject('¡Ups!')
        }

    })
}


helloPromise()
  .then(response => console.log(response))
  .catch(error => console.log(error))


// Classes

class calculator {
    constructor() {
        this.valueA = 0
        this.valueB = 0
    }

    sum(valueA, valueB) {
        this.valueA = valueA
        this.valueB = valueB
        return this.valueA + this.valueB
    }
}

const calc = new calculator()
console.log (calc.sum(2,2))

// Import Modules

import hello from './module.js'
// Bringing Functionality to the Code
hello()


// Generators

function* helloWorld() {
    if (true) {
        yield 'Hello, '
    }
    if (true) {
        yield 'World'
    }
}

const generatorHello = helloWorld()
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)


// Includes () para verificar si hay un valor dentro de un Array desde ES7

let numbers = [1, 2, 5, 7, 9]

if (numbers.includes(9)) {
    console.log('There is a 9 inside the Array')
} else {
    console.log('There is not a 9 inside the Array')
}

// Elevar a un Exponente

let base = 4
let exponent = 3
let result = base ** exponent

console.log(`El resultado de ${base} elevado a la ${exponent} es ${result}`)


// Objects Entries (Object.entries) desde ES8

const equipo = {
    frontend: 'Jeshua',
    backend: 'Angelo',
    design: 'Angie',
}

const entries = Object.entries(equipo)
console.log(entries)
console.log(`La cantidad del objeto equipo es ${entries.length}`)

// Extraer valores de el Objeto equipo con (Object.values)
const valoresEquipo = Object.values(equipo)
console.log(valoresEquipo)

// Agregar Cadenas de String para poner mas texto al principio o final

const string = 'hello';
console.log(string.padStart(7,'hi'))
console.log(string.padEnd(12,' ----'))


// Async & Await

// Funcion en forma de Promesa
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        // Esperar 2000 milisegundos
        (false)
         ? setTimeout(() => resolve('Hello World'), 2000)
         : reject(new Error('Test Error'))
    })
}

const helloAsync = async () => {
    // Ejecucion de la funcion
    const hello = await helloWorld()
    console.log(hello)
}

helloAsync()


// Controlar para Manejar Errores
const anotherFunction = async () => {
    try {
        const hello = await helloWorld()
        console.log(hello)
    } catch (error) {
        console.log(error)
    }
}

anotherFunction()



// Caracteristas con ES9

const obj = {
    name: 'Jeshua',
    age: 22,
    country: 'IT'
}

// Encapsular solo un grupo de datos
let { name, ...all } = obj
console.log(name, all)

// Imprimir solo el grupo de datos
console.log(all)


// Operador de propagacion

// Heredar el anterior objeto con el operador ...
const obj2 = {
    ...obj,
    eyesColor: 'blue'
}

console.log(obj2)


// Manejar Finally de un Promise

// Function
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
          ? setTimeout( () => resolve('Hello World'), 3000)
          : reject (new Error('Test Error'))
    })
}

helloWorld()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  // Despues de que se ejecuta la promesa se puede poner un Finally   
  .finally(() => console.log("Ha Finalizado "))


// Agrupar Bloques de Regex (Regular Expresions, Expresiones Regulares)

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2020-04-20')

// Hacer Match a los Grupos
const year = match[1]
const month = match[2]
const day = match[3]

console.log('Date ->', year, month, day)


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