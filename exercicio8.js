import _ from 'lodash/fp'

const scores = [50, 6, 100, 0, 10, 75, 8, 60, 90, 80, 0, 30, 110];

const boostSingleScores = _.map(num => num < 10 ? num * 10 : num)

const rmvOverScores = _.filter(val => val <= 100);

const rmvZeroScores = _.filter(val => val > 0);

const average = _
//Compose a function that will remove both zero or lower scores and scores over 100. Test it using the scores array.
const removeOverZero = _.compose(
    rmvOverScores,
    rmvZeroScores
)
//Compose a function that will do all the modifications to an array. Test it using the scores array.
const performAll = _.compose(
    rmvZeroScores,
    rmvZeroScores,
    boostSingleScores
)
//Create a function that will accept an array and return the average.

// const scoresSum = (arr) => arr.reduce((sum, val) => sum + val, 0);
const scoresSum = arr => _.sum(arr)

// const scoresCnt = (arr) => arr.reduce((cnt, val) => cnt + 1, 0);
const scoresCnt = arr => arr.length

const mediaScores = (arr) => scoresSum(arr) / scoresCnt(arr)

//Compose a function that will do all the modifications on an array and return an average.
const mediaAfterAll = _.pipe(
    performAll,
    mediaScores
)
console.log(mediaAfterAll(scores))