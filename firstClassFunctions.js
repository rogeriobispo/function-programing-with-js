// first-class quer dizer que algo é apenas um valor.
// a first-class-function signfica que função é tratada como valor. 
// posso estar array, pode ser parametro um método,
// pode ser retorno de uma funçao. 

// func pode ser armazenada uma variavel. 

const numero = 28
const func = () => {
    return 288
}
console.log(func())

//func pode ser armazeda em um array
const arr = [29, () => 299]
console.log(arr[1]())
// exemplo 2 array é a mesma coisa do exemplo arr
const arr2 = [30, function () { return 300 }]
console.log(arr2[1]())

// func pode ser armazenada em um objeto. 
obj = {
    num: 31,
    funct: () => 311
}

console.log(obj.funct())

// func pode ser passada como parametro. 

const fn1 = (string, func) => {
    console.log("valor parametro string", string)
    func();

}
fn1("Rogério", () => {
    console.log("esta funç;ao foi passada como parametro")
})

// a func pode retornar uma func

const fn2 = state => {
    if (state) {
        return () => console.log("state é verdadeiro")
    } else {
        return () => console.log("state é falso")
    }
}

const fn3 = fn2(true)
fn3()
const fn4 = fn2(false)
fn4()
