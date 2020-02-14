"use strict";

const num = 10;
// num = 100; não permite.

const arr = [3, 4, 2];
Object.freeze(arr);

const sort = arr2 => {
  // return arr2.sort(); lança uma exception pois altera o array original.
};

const sortArray = sort(arr);
console.log(arr);
console.log(sortArray);

// ____________________________________________________________________________//

const obj = {
  name: "Rogério",
  lastName: "dos santos bispo",
  score: 99,
  completion: true,
  questions: {
    q1: { success: true, value: 1 },
    q2: { success: false, value: 1 }
  }
};

let obj2 = Object.assign({}, obj);
obj2.score = 25;
console.log(obj);
console.log(obj2);

let obj3 = JSON.parse(JSON.stringify(obj));
