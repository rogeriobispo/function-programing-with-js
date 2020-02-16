
const users = [{ name: "James", score: 30, tries: 1 }, { name: "Mary", score: 110, tries: 4 }, { name: "Henry", score: 80, tries: 3 }];

const clone = (obj) => {
    return JSON.parse(JSON.stringify(obj))
}
//Modifies Data
const storeUser = function (arr, user) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name.toLowerCase() === user.name.toLowerCase()) {
            arr[i] = user;
            break;
        }
    }
};

//Pure Functions
const getUser = function (arr, name) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name.toLowerCase() === name.toLowerCase()) {
            return arr[i];
        }
    }
    return null;
};

const updateScore = function (user, newAmt) {
    if (user) {
        user.score += newAmt;
        return user;
    }
};

const updateTries = function (user) {
    if (user) {
        user.tries++;
        return user;
    }
};



let usr = getUser(users, "Henry");
let usr1 = updateScore(clone(usr), 30);
let usr2 = updateTries(clone(usr1));
console.log(usr)
console.log(usr1)
console.log(usr2)
console.log("############################without cloning#################")
// sem clonar altera a instancia original.

let usr10 = getUser(users, "Henry");
let usr11 = updateScore(usr10, 30);
let usr12 = updateTries(usr11);
console.log(usr10)
console.log(usr11)
console.log(usr12)




//storeUser(usr2);




