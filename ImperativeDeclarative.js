// Imperative code
const imperativeCode = (fns, x) => {
    return fns.reduce(() => {
        return f(v)
    }, x)
}

// DECLARATIVE CODE
const declarativeCode = (fns, x) => {
    let result;
    for (let index = 0; index < fns.length; index++) {
        if (i === 0) {
            result = fns[i](x)
        }
        result = fns[i](result)

    }

    return result
}