let string = 'some test string'

// task 1:
let firstLetter = string.slice(0, 1);
console.log('First letter is ' + firstLetter);

let lastLetter = string.slice(-1);
console.log('Last letter is ' + lastLetter);

//task 2:
console.log('Capital first letter is ' + firstLetter.toUpperCase());
console.log('Capital last letter is ' + lastLetter.toUpperCase());

//task 3:
let substring = string.indexOf('string');
console.log('The index is ' + substring);

//task 4:
let secondSpace = string.lastIndexOf(' ');
console.log('The index of the second space is ' + secondSpace);

//task 5:
let newString5 = string.substr(5, 4);
console.log('The new string (task 5) is ' + newString5);

//task 6:
let newString6 = string.substring(5, 9);
console.log('The new string (task 6) is ' + newString6);

//task 7:
let newString7 = string.slice(0, -6);
console.log('The new string (task 7) is ' + newString7);

//task 8:
let a = 20,
	b = 16,
	string8; //a name of variable in the task was changed from string to string8 for more clarity
string8 = `${a}${b}`;
console.log('The string (task 8) is ' + string8);


