/**
 * são funções que operam sobre outras funções
 *
*/

let things = ['Building', 'car', 'bicycle', 'automobile', 'Tree', 'house']



things.sort((a, b) => {
    let x = a.toLocaleLowerCase()
    let y = b.toLocaleLowerCase()
    if (x < y)
        return -1
    if (x > y)
        return 1

    return 0
})
console.log(things)