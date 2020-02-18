/**
 * Currying
 */

function curry(fn, arity = fn.length) {
    return (function nextCurried(prevArgs) {
        return function curried(nextArg) {
            var args = [...prevArgs, nextArg];

            if (args.length >= arity) {
                return fn(...args);
            }
            else {
                return nextCurried(args);
            }
        };
    })([]);
}

const compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x);
const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x)

const doubleNum = (num) => num + num

const totalIt = (n1, n2, n3, n4) => n1 + n2 + n3 + n4

const doArray = (num1, num2) => [num1, num2]

const newFunction = pipe(
    doubleNum,
    curry(totalIt)(3)(2)(1),
    curry(doArray)(50)
)
console.log(newFunction(5))
//remover linha acima