
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