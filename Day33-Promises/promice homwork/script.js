
//! prm1.js

function compareToTen(t) {
    if (t < -100 || t > 100) return Promise.reject('Out of range')
    return Promise.resolve(t >= 10)
}

compareToTen(15)
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log('Cleanup complete 15'))

compareToTen(8)
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log('Cleanup complete 8'))

compareToTen(340)
    .then(result => console.log(result))

    //^ .catch(error => console.log(error)) 
    .catch(error => console.error(error))
    .finally(() => console.log('Cleanup complete 340'))

// //! another way

// function compareToTen(t) {
//     return new Promise((resolve, reject) => {
//         if (t < -100 || t > 100) {
//             reject('Out of range!')
//         } else {
//             resolve(t >= 10)
//         }
//     })
// }

// compareToTen(15)
//     .then(result => console.log(result))
//     .catch(error => console.log(error))
//     .finally(() => console.log('Should Print: 15 is Valid'))

// compareToTen(8)
//     .then(result => console.log(result))
//     .catch(error => console.log(error))
//     .finally(() => console.log('Should Print: 8 is too small'))

// compareToTen(340)
//     .then(result => console.log(result))

//     //^ .catch(error => console.log(error)) 
//     .catch(error => console.error(error))
//     .finally(() => console.log('Should Print: 340 is Valid'))

// //! prm2.js


function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
        //*    chacking if all of the num are String array are strings (true or false)
        if (words.every(word => typeof word === 'string')) {

            //* lower words
            // const lowerWord = words.map((word) => word.lowerWord)
            // resolve(lowerWord)

            //* upper words
            const upperWord = words.map((word) => word.toUpperCase())
            resolve(upperWord)
        } else {
            reject('Error: Not suitable with string only!')
        }

    })
}

// function sortWords(words) {
//     return new Promise((resolve, reject) => {
//         resolve(words.sort())
//     })
// }

//! another way

function sortWords(words) {
    return Promise.resolve(words.sort())
}


makeAllCaps(['cucumber', 'tomatos', 'avocado'])
    .then(sortWords)
    .then((result) => console.log(result))
    .catch(error => console.log(error))

makeAllCaps(['cucumber', 44, true])
    .then(sortWords)
    .then((result) => console.log(result))
    .catch(error => console.log(error))


//! prm3.js
//~ `fetchX()` should return a promise that is resolved to 25 immediately
//~ `fetchY()` should return a promise that is resolved after 2 seconds to 17


function add(prmX, prmY) {
    return Promise.all([prmX, prmY])
        .then(values => {
            return values[0] + values[1]
        })
}

Promise.all([
add(fetchX(), fetchY())
    .then(sum => {
        console.log(sum)
    })
])


function fetchX() {
    return Promise.resolve(25)
}

//! another way
// function fetchX() {
//     return new Promise((resolve) => resolve(25))
// }

function fetchY() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(17)
        }, 2000)
    })
}

//! github- repos.html 


//~ Use the github API to get a list of users with images and show it nicely on the page, along
//~ with their images
//~ Note: Open APIs will sometimes block you if too many requests are being sent, use a simple
//~ caching mechanism as presented in the city.service

