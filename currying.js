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

const greeting = (msg, username) => console.log(msg, username)
// repeats the message
greeting("Welcome", "rogerio")
greeting("Welcome", "rogerio")
greeting("Welcome", "rogerio")

const curryGreeting = (msg) => (name) => console.log(msg, name)

welcomeGreet = curryGreeting("Welcome curry")

welcomeGreet('rogerio')


const ffun = (a, b, c) => a + b + c
const gfun = (d, e) => d + e
const hfun = (f, g, h) => f + g + h

// const curriedF = curry(ffun)
// const curriedg = curry(gfun)
// const curriedh = curry(hfun)
// const newFun = pipe(
//     curriedF(1)(1),
//     curriedg(1),
//     curriedh(1)(1)
// )


const newFunc = pipe(
    curry(ffun)(1)(2),
    curry(gfun)(4),
    curry(hfun)(5)(6)
);

console.log(newFunc(2))

