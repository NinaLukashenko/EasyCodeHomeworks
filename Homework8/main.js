//task 1
let btnMsg = document.getElementById('btn-msg');

//функция вынесена отдельно чтобы в будущем, при необходимости, можно было применить метод removeEventListener('click', showMsg);
//в других задачах аналогично
function showMsg(e) {
	alert(e.target.dataset.text);
}

btnMsg.addEventListener('click', showMsg);


//task 2
function changeBgColor() {
	btnMsg.classList.toggle('btn--danger');
}

btnMsg.addEventListener('mouseover', changeBgColor);
btnMsg.addEventListener('mouseout', changeBgColor);


//task 3
function setTagName(e) {
	document.getElementById('tag').textContent = e.target.tagName;
}

document.addEventListener('click', setTagName);


//task 4
function addLi() {
	let ul = document.querySelector('ul');
	let newLi = document.createElement('li');
	newLi.textContent = `Item ${ul.children.length + 1}`;
	ul.appendChild(newLi);
}

document.getElementById('btn-generate').addEventListener('click', addLi);


//task 5
//Project TODO


//task 7
//Решение по ссылке ниже:
//https://codepen.io/ninalukashenko/pen/VgZOMM
