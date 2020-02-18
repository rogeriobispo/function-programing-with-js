/**
 * 
 */

const users = [{ name: "James", score: 30, tries: 1 }, { name: "Mary", score: 110, tries: 4 }, { name: "Henry", score: 80, tries: 3 }];

//Modifies Data
const storeUser = (arr, user) => {
    return arr.map((elem) => {
        return (elem.name.toLowerCase() === user.name.toLowerCase()) ? user : elem
    })
}


//Pure Functions
const cloneObj = function (obj) {
    return JSON.parse(JSON.stringify(obj));
};

const getUser = (arr, name) => {
    return arr.reduce((usr, val) => {
        if (val.name.toLowerCase() === name.toLowerCase())
            return val
        else
            return usr
    }, null)
}

var updateScore = function (newAmt, user) {
    if (user) {
        user.score += newAmt;
        return user;
    }
};

var updateTries = function (user) {
    if (user) {
        user.tries++;
        return user;
    }
};

const compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x);
const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x)

const partGetUser = getUser.bind(null, users)
const partUpdatedScore30 = updateScore.bind(null, 30)

const updateUser = pipe(
    partGetUser,
    cloneObj,
    partUpdatedScore30,
    updateTries
)
console.log(users[2])
const result = updateUser("Henry")

console.log(result)
