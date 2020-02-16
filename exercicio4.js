
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
const usr = getUser(users, "Ovo");

console.log(usr)


var updateScore = function (user, newAmt) {
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

const usr = getUser(users, "Henry");
const usr1 = updateScore(cloneObj(usr), 30);
const usr2 = updateTries(cloneObj(usr1));
storeUser(users, usr2);





