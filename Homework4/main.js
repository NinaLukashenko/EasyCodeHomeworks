
//task 1:
//Для перебора элементов массива рекомендовано использовать цикл for.
//arguments - это «псевдо-массив»
//"Если коротко: цикл for(var i=0; i<arr.length...) надёжнее и быстрее" 
//https://learn.javascript.ru/array
//https://learn.javascript.ru/arguments-pseudoarray

function multiply() {
	if (arguments.length === 0) {
		return 0;
	} else {
		let mulp = 1;
		for (let i = 0; i < arguments.length; i++) {
			mulp *= arguments[i];
		}
		return mulp;
	}
}

console.log(multiply(1, 2, 3));


//task 2:
function getReverseString(string) {
	return string.split('').reverse().join('');
}

console.log(getReverseString('test'));


//task 3:
function getCodeStringFromNumber(text) {
	let codeString = '';
	for (let i = 0; i < text.length; i++) {
		if (i === text.length - 1) {
			codeString += text.charCodeAt(i);
		} else {
			codeString += text.charCodeAt(i) + ' ';
		}	
	}
	return codeString;
}

console.log(getCodeStringFromNumber('hello'));


// //task 4:
// let userNumber = +prompt('Введите число в диапазоне от 1 до 10.');

// while(true) {
// 	if (userNumber > 10 || userNumber <= 0) {
// 		userNumber = +prompt('Ваше число не подходит. \nВведите число в диапазоне от 1 до 10, пожалуйста!');
// 	} else {
// 		break;
// 	}
// };

// function guessNumber(userNumber) {
// 	let winningNumber = Math.ceil(Math.random()*10); //от 1 до 10
// 	if (userNumber === winningNumber) {
// 		return ('Вы выиграли');
// 	} else {
// 		return (`Вы не угадали ваше число ${userNumber}, а выпало число ${winningNumber}`)
// 	}
// }
// let gameResult = guessNumber(userNumber);
// alert(gameResult);

//task 5:
function getArray(n) {
	let myArray = [];
	for (let i = 0; i < n; i++) {
		myArray[i] = i + 1;
	}
	return myArray;
}

console.log(getArray(10));


//task 6:
function doubleArray(arr) {
	let newArr = arr.concat(arr.slice());
	return newArr;
}

console.log(doubleArray([1, 2, 3]));

//task 7:
function changeCollection() {
	for (let i = 0; i < arguments.length; i++) {
		arguments[i].shift();
	}
	return arguments;
}

console.log(changeCollection([1, 2, 3], ['a','b', 'c']));


//task 8:
let users = [ {name: “Denis”, age: “29”, gender: “male”},
			  {name: “Ivan”, age: “20”, gender: “male”},
			  {name: “Ann”, age: “20”, gender: “female”},
			  {name: “Sara”, age: “20”, gender: “female”},
			  {name: “Tom”, age: “20”, gender: “male”}
			]

function getUsers(users, field, value) {

}

console.log(getUsers(users, "gender", "male"))