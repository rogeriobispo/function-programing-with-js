/**
 * combinaçao de funcao para produzir nova
 * ou criar um resultado
 */

//  procedures executa mais de uma ação
// e depende de  estados compartilhado para executar uma ação.
// pode receber um parametro ou não.
// pode retornar um valor ou não


// functions
// tem uma entrada
// retorna um valor
// fazem uma task unica
// funções puras não altera nenhum estado 
// cria um novo ao inves de alterar.

str = 'Innovation distinguishes between a leader and a follower.';

const trim = str => str.replace(/^\s*|\s*$/g, '')
const noPunct = str => str.replace(/[?.,!]/g, '')
const capitalize = str => str.toUpperCase()
const breakout = str => str.split("")
const noArticles = str => (str !== "A" && str !== "AN" && str !== "THE")
const filterArticles = arr => arr.filter(noArticles)

// compose executa da direita para esquerda 
const compose = function (...fns) {
    return function (x) {
        return fns.reduceRight(function (v, f) {

            return f(v)
        }, x);
    }
}

// pipe executa da esquerda para direita· 
const pipe = function (...fns) {
    return function (x) {
        return fns.reduce(function (v, f) {

            return f(v)
        }, x);
    }
}


const prepareString = compose(filterArticles,
    breakout,
    capitalize,
    noPunct,
    trim
)

const pipeString = pipe(
    trim,
    noPunct,
    capitalize,
    breakout,
    filterArticles
)

console.log(prepareString(str))
console.log(pipeString(str))

