
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

