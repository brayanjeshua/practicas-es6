// Async Course

// API https://rickandmortyapi.com/api/

// CallBacks

// Suma de Dos Numeros
function sum(num1, num2) {
    return num1 + num2
}

function calc(num1,num2, callback) {
    return callback(num1,num2)
}

console.log(calc(6, 3, sum))


// Funcion para mostrar Fecha
function date(callback) {
    console.log("Empieza", new Date)
    console.log("Espera 3 segundos...")
    setTimeout(function () {
        let date = new Date
        callback(date)
    }, 3000)
}


// Funcion para Imprimir
function printDate(dateNow) {
    console.log("Termina", dateNow)
}

// Llamar a la funcion date
date(printDate)