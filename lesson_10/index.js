function sayHello(name) {
	// name =  MindX
	console.log('Lesson 10: Function');
	console.log('My name is ' + name);
}

sayHello('MindX');
sayHello('Alice');

function sum(a, b) {
	console.log('Total is: ', a + b);
	return a + b;
}

sum(1, 5);
sum(123, 456);
console.log(sum(123, 45));

let total = sum(4, 5);
console.log(total);

function timSoChan(num) {
	if (num == 0) {
		return 'a bang 0';
	}

	if (num % 2 == 0) {
		return 'a chan';
	}

	return 'a le';
}

console.log(timSoChan(3));


function returnNumber(num) {
	// return num * 2; // returnNumber = num * 2;
	return {
		number: num
	}
}

console.log(returnNumber(6));


function getCard(carName = 'Mac dinh') {
	let brand = 'Honda';

	return brand + ' ' + carName;
}

let name = 'City';
console.log(getCard(name));

// Anonymous function
let multiplyNumbers = function(num1, num2) {
	return num1*num2;
}

console.log(multiplyNumbers(2, 5));



function sapXep(array) {
	let n = array.length;
	for (i = 0; i < n - 1; i++) {
		for(j = i + 1; j < n; j++) {
			if (array[i] > array[j]) {
				let temp = array[i];
				array[i] = array[j];
				array[j] = temp;
			}
		}
	}

	return array;
}

let arr = [1, 6, 2, 7, 3];
arr.length;
console.log(sapXep(arr));
console.log(sapXep([134, 45, 16]));

// [134, 45, 16]
n = 3;
// i = 0; j = 1; 134 > 45? ==> 
	// temp = a[0] = 143;
	// a[i] = a[j]; a[0] = a[1] = 45
	// a[j] = temp; a[1] = temp = 134
	// a[0] = [45], a[1] = 134 ==> [45, 134, 16]