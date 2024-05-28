// Khoi lenh
let a = 5;
{
    var b = 2;
    console.log(a);
    console.log(b);
    {
        console.log(b);
        b = 6;
    }
}

console.log(a);
console.log(b);

// Cau dieu kien
//  Neu (dieu kien) {
//     thuc hien khoi lenh
//  } nguoc lai {
//     thuc hien khoi lenh
//  }

a = 2;
if (a <= 0) {
    console.log('a = 0')
} else if (a % 2 == 0) { // a % 2 == 0: true, a > 0 false
    console.log('a la so chan')
} else {
    console.log('a la so le');
}

a  = - 5;
switch (a % 2) {
    case 0:
        console.log('A la so chan')
        break;
    case 1:
        console.log('A la so le');
        break;
    default:
        console.log('A = 0');
}

console.log('Nhieu dieu kien');
if (a == 0) {
    console.log('a = 0')
}
if (a % 2 == 0) { // a % 2 == 0: true, a > 0 false
    console.log('a la so chan')
}
if (a % 2 != 0) {
console.log('a la so le');
}

// switch - case
let day;
console.log(new Date().getDay());
switch (8) {
    case 0:
    case 8:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        console.log(day);
        break;
    case 3:
        day = 'Wednesday';
        console.log(day);
        break;
    default:
        day = 'Not found';
}
console.log(day);


// Vong lap for, while
//Vong lap foe

// for (<Gia tri khoi tao>; <Dieu kien ket thuc vong lap> ; <Thay doi gia tri khoi tao>) {
//     Khoi lenh
// }

let sum = 0;
for (let i = 0; i <= 5; i = i + 10) {
    sum =sum + i;
    console.log(i);
}
console.log(sum);

// i = 0; 0 < 5; sum = 0 + 0 = 0; i = 0 + 1 = 1;
// i = 1; 1 < 5; sum = 0 + 1 = 1; i++ = 2
// i = 2; 2 < 5; sum = 1 + 2 = 3; i++ = 3
// i = 3; 3 < 5; sum = 3 + 3 = 6; i++ = 4
// i = 4; 4 < 5; sum = 6 + 4 = 10; i++ = 5
// i = 5; i < 5; --

// Vong la while
// while (<Dieu kien dung>) {
//     Khoi lenh
// }

sum = 0;
let i = 0;
while (sum < 100) {
    sum = sum + 1;
    console.log(i);
    i++;
}

console.log(sum, i)

sum = 0;
for (let i = 0; sum < 100; i++) {
    sum = sum + i;
}
console.log(sum);

console.log('Break')
for (i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        console.log('I in block: ', i);
        break;
        console.log('A la so chan');
    }

    console.log('Out block: ', i);
    console.log('A la so le');
}

i = 0;
while (i < 100) {
    i++;
    if (i % 2 == 0) {
        continue;
    }
    console.log('While: ', i);
}
