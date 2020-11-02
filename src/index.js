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