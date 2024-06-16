// Nomal function
// console.log(sum(1,2));
// function sum(a, b) {
//     console.log('Sum 2 numbers')
//     return a + b;
// }

// Arrow function
const sum = (a, b) => {
    console.log('Sum 2 numbers')
    return a + b;
}

// console.log(sum(1,2));

const sub = (a, b) => a - b; // Short handed return
console.log(sub(1,2))

const double = a => a * 2; // Single param
console.log(double(5));

const getAddress = () => ({city: 'Ho Chi Minh'});
console.log(getAddress());

// Template literal
const strA = 'Hello';
const strB = 'MindX';

const str = `${strA}, ${strB}

    My name is Tuong
`;
console.log(str);

// Hello, MindX

// import {sum, sub} from './modules/math.js';
// console.log(sum(1,2));
// console.log(sub(1,2));


import sum2Number from './modules/math.js'
console.log(sum2Number(1,4));

// Spread & Rest Operator
// Spread operator: (array, object, set)
console.log([1, 2, 3, 4])
console.log(...[1, 2, 3, 4])

console.log({name: 'MindX', add: 'QT'});

// Sao chep mang
const arr1 = [1, 2, 3, 4];
const arr2 = [6, 7, 8];

// for (let i = 0; i< arr2.length; i++) {
//     arr1.push(arr2[i]);
// }
// console.log(arr1)

const arr  = [...arr1, 5, ...arr2, 9]
console.log(arr);

console.log(Math.max(...arr));


// object
const obj1 = {name: 'MindX'};
const obj2 = {add: 'QT'};

// const obj = {
//     name: obj1.name,
//     add: obj2.add
// }

const obj = {
    ...obj1,
    ...obj2,
    score: 10
}
console.log(obj);

const obj3 = obj1;
const obj4 = {...obj1};
obj1.key = 'Hello'
console.log(obj3, obj4);

const sumNumbers = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}
console.log(sumNumbers(1,2,4,5,6,8));


// Destructuring
// unpack object theo ten key
const newObj = {
    name: 'MindX',
    add: 'Quan Trung'
}
const {name, add} = newObj;
console.log(name, add);


// unpack object array theo thu tu
const newArray = [1, 2, 3];
const [x, ...y] = newArray;
console.log(x, y);


