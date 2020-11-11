
const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
          ? setTimeout(() => resolve('Do something Async'), 3000)
          : reject(new Error('Test Error'))
    })
}

const doSomething = async () => {
    const something = await doSomethingAsync()
    console.log(something)
}

console.log('Before')
doSomething()
console.log('After')


const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync()
        console.log(something)
    } catch(err) {
        console.log(err)
    }
}

console.log('Before another function')
anotherFunction()
console.log('After another function')