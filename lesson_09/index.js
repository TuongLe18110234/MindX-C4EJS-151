let car1 = 'Saab';
let car2 = 'Volvo';
let car3 = 'BMW';

const cars = ['Saab', 'Volvo', 'BMW'];

console.log(cars);

console.log(cars[0]);
console.log(cars[cars.length - 1]); // Last element
console.log(cars.length);

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
    if (cars[i] == 'BMW') {
        cars[i] = 'BMW Car';
    }
}

console.log(cars);

const arr = [6, false, 'MinX', null, undefined, {name: 'MindX'}];
console.log(arr);

// Giả sử có một dãy số gồm 5 số khác nhau.
// Hãy tính trung bình cộng của 5 số đó.
let numArr = [10, 20, 30, 40, 50, 60, 70, 80];

let sum = 0;
for(let i = 0; i < numArr.length; i++) {
    sum = sum + numArr[i];
}

console.log(sum / numArr.length);

// Mang da chieu
const boards = [
    [' ', 'X', ['MindX', 'MindX 2']],
    ['0', ' ', 'My Class'],
    ['X', 'My', ' ']
]

// console.log('In mang da chieu')
// for(let i = 0; i< boards.length; i++) {
//     let arr = boards[i]
//     for (let j = 0; j < arr.length; j++) {
//         console.log(arr[j])
//     }
// }

console.log(boards[0]);
console.log(boards[0][2]);
console.log(boards[0][2][1]);

const posts = [
    {
        name: 'Quoc te thieu nhi',
        reacts: ['Tim', 'Like', 'Haha']
    },
    {
        name: 'Quoc te lao dong',
        reacts: ['Tim', 'Like', 'Haha', 'Phan no']
    }
]

console.log(posts);

// Các phương thức thông dụng của mảng
const newArr = [1, 2, 3, 4, 5]; // 28 Quang Trung
const arr2 = [1, 6, 4, 3, 8];


newArr.push('MindX'); // newArr = [1, 2, 3, 4, 5, 'MindX']
console.log(newArr.pop()); // newArr = [1, 2, 3, 4, 5]
console.log(newArr.shift()); // newArr = [2, 3, 4, 5]
newArr.unshift('MindX') // newArr = ['MindX', 2, 3, 4, 5]
console.log('newArr', newArr);
newArr.splice(0, 2, 'Mind') // Xoa phan tu newArr = ['MindX', 'Mind', 4, 5]
console.log('newArr', newArr);

console.log(arr2.sort());

const concatArr = arr2.concat(newArr);
console.log(concatArr);

const sliceArr = concatArr.slice(3, 5);
console.log(sliceArr);

console.log(concatArr.slice(5, 7))

// Object
console.log('Object ----------------------')
const car = {
    brand: 'BMW',
    year: '2022',
    color: 'Red'
}

const colorKey = 'color';
car.color = 'Blue';
console.log(car.color);
console.log(car[colorKey]);

delete car.color;
console.log(car.color);

const car4 = {
    color: 'White',
    seats: '7'
}
const newCar2 = Object.assign(car, car4);
console.log(newCar2);

console.log(Object.keys(newCar2));


const newPosts = [
    {
        name: 'Quoc te thieu nhi',
        reacts: [
            {
                name: 'Tim',
                quantity: '35'
            },
            {
                name: 'Haha',
                quantity: '15'
            }
        ],
        user: {
            id: 'tuongle.234',
            userName: 'Tuong Le'
        }
    },
    {
        name: 'Quoc te lao dong',
        reacts: ['Tim', 'Like', 'Haha', 'Phan no']
    }
]