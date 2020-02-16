/**
 * diferenças entre function arrow function
 * sintax enchuta
 * quando tem um parametro,
 * parenteses não é necessario
 */

//  sintax enchuta
var sum = function (num1, num2) {
    return num1 + num2
}
var sum2 = (num1, num2) => num * num
// quando recebe apenas um parametro não é necessario parenteses
var funct1 = num => num * num
// quando nao tem parametro parenteses é necesarios
var funct2 = () => 100
// quando é apenas uma linha não é necessario return
var funct2 = () => {
    100
}
console.log("undefined", funct2())
var funct3 = () => {
    return 100
}
console.log("100", funct3())
