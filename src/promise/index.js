// ES6

const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!')
        } else {
            reject('Whoops!')
        }
    })
}

somethingWillHappen(false)
  .then(response => console.log(response))
  .catch(response => console.error(response))



const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('Hey After 2000ms!')
            }, 2000)
        } else {
            const error = new Error('Whoops!')
            reject(error)
        }
    })
}

somethingWillHappen2()
  .then(response => console.log(response))
  .catch(err => console.error(err))



// Correr promesas encadenadas


Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then(response => {
      console.log('Array results', response)
  })
  .catch(err => {
      console.error(err)
  })