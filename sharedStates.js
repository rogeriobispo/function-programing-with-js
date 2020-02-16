"use strict";

const num = 10;
// num = 100; não permite.

const arr = [3, 4, 2];
Object.freeze(arr);


const clone = obj => {
  return JSON.parse(JSON.stringify(obj))
}


const sortArray = clone(arr).sort()
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
// clona object mas manten a referencia do q1, q2 sub objects
// obj2.questions.q1 = 10

obj2.score = 25;
console.log(obj);
console.log(obj2);

let obj3 = JSON.parse(JSON.stringify(obj));
obj3.questions.q2 = 10
// clona todo o object sem manter a referencia.

console.log("#################################################################")
console.log(obj)
console.log(obj3)


// ____________________________________________________________________________//
//  with arrays

const array = [{ a: 1 }, { b: 2 }]
const arr1 = Object.assign({}, array)
const arr2 = JSON.parse(JSON.stringify(array));

arr1[0].a = 5
arr2[1].b = 10
console.log(array)
console.log(arr1)
console.log(arr2)


