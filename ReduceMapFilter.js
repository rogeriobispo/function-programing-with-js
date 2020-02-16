const arr = [1, 2, 3, 4, 5]
// reduce
const total = arr.reduce((accumulator, elem) => {
    return accumulator + elem
}, 0)

console.log(total)

// map
// os parametros de map pode ser 
// 1 o elemento
// 2 o indice do elemento
// 3 o array inteiro
let newArray = arr.map(elem => {
    return elem ** 2
})
console.log(newArray)
// filter
let filterArray = arr.filter(elem => {
    return elem > 3
})
console.log(filterArray)
// todos este metodos não alteram o array
console.log(arr)