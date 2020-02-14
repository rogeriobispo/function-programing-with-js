users = [
  {
    name: "james",
    score: 30,
    tries: 1
  },
  {
    name: "Mary",
    score: 110,
    tries: 4
  },
  {
    name: "Henry",
    score: 80,
    tries: 3
  }
];

var getUser = (arr, name) => {
  return arr.filter(element => {
    return element.name.toLowerCase() === name.toLowerCase();
  })[0];
};

var storeUser = (arr, user) => {
  return arr.forEach(element, index => {
    if (element.name.toLowerCase() === user.name.toLowerCase()) {
      arr[index] = user;
      break;
    }
  });
};

var updateScore = (newAmt, user) => {
  if (user) user.score += newAmt;
  return user;
};

var returnUsers = () => {
  return users;
};

var updateTries = user => {
  if (user) user.triess++;
  return user;
};

var updateUser = (userId, newUser) => {
  currentUser[userId] = newUser;
};

const user = getUser(users, "Henry");
const usr1 = updateScore(user, 30);
let usr2 = updateTries(usr1);
storeUser(usr2);
