import lodash from 'lodash'
import lodashfp from 'lodash/fp'


// // notfunction functions
// const sum = lodash.add(1, 2)
// console.log("Soma lodash", sum)
// // curried add
// const sum2 = lodashfp.add(1)(2)
// console.log("Soma lodashfp", sum2)

const addOne = lodashfp.map(num => num + 1)
const multByThree = lodashfp.map(num => num * 3)
const removeNumsOver100 = lodashfp.filter(num => num <= 100)
const logAndReturn = data => {
    console.log(data)
    return data;
}
const sumAllNumbers = lodashfp.reduce((total, num) => total + num)(0)
const processNumbers = lodashfp.pipe(
    addOne,
    multByThree,
    removeNumsOver100,
    logAndReturn,
    sumAllNumbers,
    console.log
)

processNumbers([5, 8, 20, 40])