/**
 * as funções determinam o escopo das coisas.
 * escopos definem onde as variaveis são visiveis
 */


// var funct = () => {
//     var a = 2;
//     b = 3;
//     var funct2 = () => {
//         console.log(a + b)
//         //remover linha acima
//     }
//     funct2()
// }

// var funct3 = () => {
//     console.log(a + b)
// }
// funct3()

/**
 * closure
 * em uma variavel local dentro uma função
 * é mantida depois que a função retorna
 *
*/

var funct = () => {
    var a = 2;
    b = 3;
    var funct2 = () => {
        a++
        b++
        console.log(a + b)
    }
    console.log("func have already returned")
    return funct2
}

const funcReturned = funct();

funcReturned()
