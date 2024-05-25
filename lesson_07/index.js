console.log("I'm from MindX");

// Bien va khai bao bien
let a;
var b;
const c = 5;
// console.log('A = ', a);

// Comment
/*
    Dong 1
    Dong 2
    Dong 3
*/

// Phép gán (Assignment) và hằng số

a = 5;
console.log('A = ', a);

b = 10;
console.log('B = ', b);

a = b;
console.log('A = ', a);

// c = 20;
console.log('C = ', c);

const PI = 3.143435454545454545455454545;
const maxRequest = 5000;

let r = 5;
let dienTich = PI * r * r;
let chuVi = 2 * PI * r;


// Quy ước đặt tên biến trong JS.
// Bat dau ten bien
let chuCai = 'ABC' // a -z
let _chuCai123 // Dau gach duoi
let $123Abc // dau $

let chucai = 'abc';

console.log(chuCai, chucai);

// let & var và Hoisting

// console.log('x = ', x);
let x = 1;

console.log('y = ', y);
var y = 10;


// Kiểu dữ liệu cơ bản bên trong Javascript

let number = 5.14;
console.log(typeof number)

let string = 'MindX';
console.log(typeof string);

let _boolean = false; // true | false
console.log(typeof _boolean)

let _null = null;
console.log(typeof _null)

let _undefined = undefined;
console.log(typeof undefined);

// Toan tu toan hoc
let soA = 6;
let soB = 2;

let soC = soA / soB; // + , - , * (nhan) , / (chia)
soC = 5 ** 2; // So mu
soC = 5 % 3; // chia lay phan du

soC--; // -- soC = soC - 1;
soC++; // ++ soC = soc + 1;

console.log(soC)

// Toán tử gán
soC = 5;
soC = 4; // soC = soC + 4

console.log(soC)

// Toán tử nối chuỗi
let chuoi1 = 'Chuoi 1';
let chuoi2 = 'Chuoi 2';

console.log(chuoi1 + " " + chuoi2);
console.log(`Toi se noi ${chuoi1} va ${chuoi2}`)

// A. Toi se noi ${chuoi1} va ${chuoi2}
// B. Toi se noi ${Chuoi 1} va ${Chuoi 2}
// C. Toi se noi Chuoi 1 va Chuoi 2

// Toán tử so sánh
if (soA % 2 != 0) {
    // > >=, <, <=
    console.log('A la so chan')
} else {
    console.log('A la so le');
}

// Toán tử logic
// && va - Dung khi tat ca deu dung
console.log(true && true)
// || hoac - Sai khi tat ca deu sai
console.log(false || false);
// ! phu dinh - Phu dinh
console.log(!true)