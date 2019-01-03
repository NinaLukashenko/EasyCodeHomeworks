//task 1:
let display = 'inline';

switch (display) {
	case 'block' :
		console.log('block');
		break;
	case 'none' :
		console.log('none');
		break;
	case 'inline' :
		console.log('inline');
		break;
	default :
		console.log('other');
}


// task 2:
// "... когда скобки есть – код лучше читается. Так что рекомендуется их писать" -
// https://learn.javascript.ru/ifelse
//task 2.1:
let visibility = 'hidden';

visibility = (visibility === 'hidden') ? 'visible' : 'hidden';

console.log(visibility);


//task 2.2:
let number = 6;

number = (number === 0) ? 1 :
	(number < 0) ? 'less than zero':
	number *= 10;

console.log(number);


//task 2.3:
let car = {
	name: 'Lexus',
	age: 10,
	create: 2008,
	needRepair: false
};

car.needRepair = (car.age > 5) ? true : false;

console.log(car);


//homework 3.1:
// "Содержимое строки в JavaScript нельзя изменять...
//Можно лишь создать целиком новую строку и присвоить в переменную вместо старой"
//https://learn.javascript.ru/string
//Использование переменной і в каждом цикле замыливает глаз, поэтому использовала разные буквы. 

let string ='i am in the easycode';
let newString = '';
let n = 0; 

while (n < string.length) {
	if (string[n - 1] === ' ' || n === 0) {
		newString += string[n].toUpperCase();
	} else {
		newString += string[n];
	}
	n++;
}
console.log(newString);


//task 3.2:
let mystery = 'tseb eht ma i';
let clue = '';
let p = mystery.length - 1;

while (p >= 0) {
	clue += mystery[p];
	p--;
};
console.log(clue);


//task 3.3:
//в общем чате в телеграм Денис писал делать это задание через обычный цикл for
let factorial = 10;
for (let j = factorial - 1; j >= 1; j--) {
	factorial *= j;
};
console.log(factorial);


//task 3.4:
let tagline = 'JavaScript is a pretty good language';
let newTagline = '';

for (let i = 0; i < tagline.length; i++) {
	if (tagline[i] === ' ') {
		continue;
	} else if (tagline[i - 1] === ' ' || i === 0) {
		newTagline += tagline[i].toUpperCase();
	} else {
		newTagline +=tagline[i];
	}
}

console.log(newTagline);


//task 3.5:
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let value of numbers) {
	if (value % 2 === 1) {
		console.log(value);
	};
};


//task 3.6:
let list = {
	name: 'denis',
	work: 'easycode',
	age: 29
};
console.log(list);
for (let k in list) {
	if (typeof(list[k]) === 'string') {
		list[k] = list[k].toUpperCase();
	};
};
console.log(list);