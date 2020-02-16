const score = [50, 6, 100, 0, 10, 75, 8, 60, 90, 80, 0, 30, 110]

// todo score menor que 10 deve ser multiplicado por 10
const menorDez = score.map(elem => {
    return elem < 10 ? elem * 10 : elem
})

// console.log(menorDez)

// remover score acima de 100
const acimaCem = score.filter(elem => {
    return elem <= 100
})


// remover score menor que zero ou zero. 

const acimaZero = score.filter(elem => {
    return elem > 0
})

const somaScore = score.reduce((total, elem) => {
    return total += elem
}, 0)

const totalScores = score.reduce((total, elem) => {
    return total + 1
}, 0)
console.log(totalScores)