// task Objects:
let phone = {
	product: 'iphone'
};

phone.price = 1000;
phone['currency'] = 'dollar';
phone.details = { 
	model: 'X',
	color: 'Silver'
}; 

console.log(phone);

//task Conversion of Primitives:
let a = 0 || 'string'; // a равно 'string' потому, что логический оператор ИЛИ запинается на true, а 0 равен false
console.log(a);

let b = 1 && 'string'; // 'string' - И запинается на false, так как 1 равен true, он пойдет дальше до конца выражения
console.log(b);

let c = null || 25; // 25 - ИЛИ запинается на true, а null равен false
console.log(c);

let d = null && 25; // null - И запинается на false, а null равен false
console.log(d);

let e = null || 0 || 35; // 35 - ИЛИ запинается на true, а null и 0 равны false
console.log(e);

let h = null && 0 && 35; // null - И запинается на false, а null равен false
console.log(h);

console.log(12 + 14 + '12'); // "2612" - JS будет складывать числа, пока не наткнется на строку ибо при сложении со строкой происходит строковое преобразование
console.log(3 + 2 - '1'); // 4 - при арифметических операциях, кроме + происходит числовое преобразование
console.log('3' + 2 - 1); // 31 - наверное, потому, что для строк не предусмотрена операция -, JS сразу считает 2 - 1
console.log(true + 2); // 3 - - при числовом преобразовании true → 1
console.log(+'10' + 1); // 11 - + перед строкой преобразовывает ее в число
console.log(undefined + 2); // NaN - при числовом преобразовании undefined → NaN
console.log(null + 5); // 5 - при числовом преобразовании null → 0
console.log(true + undefined); // NaN - при числовом преобразовании undefined → NaN

// task if else # 1:
let visibility = 'visible';
console.log(visibility);

if (visibility === 'hidden') {
	visibility = 'visible';
} else {
	visibility = 'hidden';
}

console.log(visibility);

// task if else # 2:
let number = 5;
console.log(number);

if (number === 0) {
	number = 1;
} else if (number < 0) {
	number = 'less then zero';
} else {
	number *= 10;
}

console.log(number);

// task if else # 3:
let car = {
	name: 'Lexus',
	age: 10,
	create: 2008,
	needRepair: false
};
console.log(car);

if (car.age > 5) {
	console.log('Need Repair');
	car.needRepair = true;
} else {
	car.needRepair = false; 
}

console.log(car);

// task if else # 4:
let item = {
	name: 'Intel core i7',
	price: '100$',
	discount: '15%'
};
	
console.log(item);

if ('discount' in item && item.discount != 0) {
	item.priceWithDiscount = parseFloat(item.price)*((100 - parseFloat(item.discount))/100);
	console.log(item.priceWithDiscount);
} else if (!('discount' in item)) {
	console.log(item.price);
}
