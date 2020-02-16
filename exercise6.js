
const scores = [50, 6, 100, 0, 10, 75, 8, 60, 90, 80, 0, 30, 110];

const boostSingleScores = (arr) => arr.map(val => (val < 10) ? val * 10 : val);

const rmvOverScores = (arr) => arr.filter(val => val <= 100);

const rmvZeroScores = (arr) => arr.filter(val => val > 0);


const scoresSum = (arr) => arr.reduce((sum, val) => sum + val, 0);

const scoresCnt = (arr) => arr.reduce((cnt, val) => cnt + 1, 0);

const average = (arr) => scoresSum(arr) / scoresCnt(arr)

const compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x);
const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x)

const composeArray = compose(rmvOverScores, rmvZeroScores)

const composeArrayAll = compose(
    boostSingleScores,
    rmvZeroScores,
    rmvOverScores,
)

const composeAverage = compose(
    average,
    boostSingleScores,
    rmvZeroScores,
    rmvOverScores,
)
console.log(composeAverage(scores))



