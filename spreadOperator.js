// clonagem superficial com spread operator. 

const arr = [5, 6, 9, 10, 12, 3, 4];
const newArray = [...arr] // cria um novo array. 

const obj = {
    name: 'Steven',
    eyes: 'blue'
};

const newObj = { ...obj };

// JSON.parse(JSON.stringify()) faz uma deep clonagem. 
