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