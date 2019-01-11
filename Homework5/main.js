//task 1: 
//ф-ю trim() использовать Денис писал в чате
function processArray(array, handler) {
	let res = '';
	for (let i = 0; i < array.length; i++) {
		res += handler(array[i]);
	}
	let result = res.trim();
	return `New value: ${result}`;
};

//call 1
let array1 = ['my', 'name', 'is', 'Trinity'];

console.log( processArray(array1, function(item) {
	let newItem ='';
	newItem += item.substr(0, 1).toUpperCase();
	newItem += item.substr(1);
	return `${newItem}`;
}) );

//call 2
let array2 = [10, 20, 30];

console.log( processArray(array2, function(item) {
	item *= 10;
	return `${item}, `;
}) );

//call 3
let array3 = [{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}];

console.log( processArray(array3, function(item) {
	return `${item.name} is ${item.age}, `;
}) );

//call 4
let array4 = ['abc', '123'];

console.log( processArray(array4, function(item) {
	newItem = item.split('').reverse().join('');
	return `${newItem}, `;
}) );


//task 2:
//"Функція Array.isArray() з'ясовує чи є передане значення масивом."
//https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

function checkEveryArrayItem(array, callback) {
	if (!Array.isArray(array)) {
		console.log('Первый параметр должен быть массивом!');
	} else {
		let result = true;
		for (let i = 0; i < array.length; i++) {
			if (!callback(array[i])) {
				result = false;
			}
		}
		return result;
	}
};

let array21 = [11, 10, 8, 5];
console.log( checkEveryArrayItem(array21, function(item, index, array){
	return item > 5;	
}) );


// Array: enumaration methods. task 1:
let numbers = [1, 2, 3, 5, 8, 9, 10];

let numbersData = numbers.map(function(item) {
	let data = {};
	data.digit = item;
	if (item % 2) {
		data.odd = true;
	} else {
		data.odd = false;
	}
	return data;
});

console.log(numbersData);


// Array: enumaration methods. task 2:
let points = [12, 4, 50, 1, 0, 18, 40];

let pointsWithoutZero = points.every(function(item) {
	return item !== 0
});

console.log(pointsWithoutZero);


// Array: enumaration methods. task 3:
let words = ['yes', 'hello', 'no', 'easycode', 'what'];

let thereIsLongWord = words.some(function(item) {
	return item.length > 3;
});

console.log(thereIsLongWord);


// Array: enumaration methods. task 4:
let letters = [{char:"a", index:12}, {char:"w", index:8}, {char:"Y", index:10}, {char:"p", index:3}, {char:"p", index:2},
{char:"N", index:6}, {char:" ", index:5}, {char:"y", index:4}, {char:"r", index:13}, {char:"H", index:0},
{char:"e", index:11}, {char:"a", index:1}, {char:" ", index:9}, {char:"!", index:14}, {char:"e", index:7}
];

function assembleString(arr) {
	arr.sort(function(a, b) {
		return a.index - b.index;
	});
	
	var keyString = arr.reduce(function(prevVal, curItem) {
		return prevVal + curItem.char;
	}, '');
	return keyString;
}

console.log( assembleString(letters) );


// Method sort. task 1:
let arrays = [ [14, 45], [1], ['a', 'c', 'd'] ];
arrays.sort(function(a, b) {
	return a.length - b.length;	
});

console.log(arrays);


// Method sort. task 2:
let computers = [
    {cpu: 'intel', info: {cores:2, сache: 3}},
    {cpu: 'intel', info: {cores:4, сache: 4}},
    {cpu: 'amd', info: {cores:1, сache: 1}},
    {cpu: 'intel', info: {cores:3, сache: 2}},
    {cpu: 'amd', info: {cores:4, сache: 2}}
];

computers.sort(function(a, b) {
	return a.info.cores - b.info.cores;
});

console.log(computers);


// Method sort. task 3 - необязательное задание. Если будет возможность проверьте тоже, пожалуйста)
let products = [
    {title: 'prod1', price: 5.2},
    {title: 'prod2', price: 0.18},
    {title: 'prod3', price: 15},
    {title: 'prod4', price: 25},
    {title: 'prod5', price: 18.9},
    {title: 'prod6', price: 8},
    {title: 'prod7', price: 19},
    {title: 'prod8', price: 63}
];

function filterCollection(arr, priceMin, priceMax) {
	let selectedGoods = arr.filter(function(item) {
		return (item.price >= priceMin && item.price<= priceMax);
	});
	selectedGoods.sort(function(a, b) {
		return a.price - b.price;
	});
	return selectedGoods;
}

console.log( filterCollection(products, 15, 30) );





