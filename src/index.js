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

