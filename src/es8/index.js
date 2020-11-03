
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

