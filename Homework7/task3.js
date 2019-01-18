//task 3.1
let howManyLiHasUl = document.querySelector('ul').children.length;

let howManyLiToAdd = 3;

for (let i = howManyLiHasUl; i < howManyLiHasUl + howManyLiToAdd; i++) {
	let newItem = document.createElement('li');
	newItem.classList.add('new-item');
	newItem.textContent = `item ${i + 1}`;
	document.querySelector('ul').appendChild(newItem);
}


//task 3.2
let linksInUl = document.querySelectorAll('ul a');

for (let i = 0; i < linksInUl.length; i++) {
	linksInUl[i].insertAdjacentHTML('beforeEnd', '<strong></strong>');
}


//task 3.3
let myImg = document.createElement('img');
myImg.setAttribute('src', 'http://29palms.ru/photo/blog/animals/sova/resized/002_Blog_Pavla_Aksenova_Sovy_Foto_zothen_-_Depositphotos.jpg');
myImg.setAttribute('alt', 'owl');
myImg.setAttribute('width', '25%');
document.body.insertBefore(myImg, document.querySelector('div'));


//task 3.4
let mark = document.querySelector('mark');
mark.insertAdjacentHTML('beforeEnd', 'green');
mark.classList.add('green');


//task 3.5
let ul = document.querySelector('ul');
let links = ul.children;

// Делаем из псевдомассива массив:
let linksArray = [];

for (let i = 0; i < links.length; i++) {
	linksArray[i] = links[i].innerHTML;
}

//Сортируем в обратном порядке:
let sortedLinks = linksArray.sort( (a, b) => {
	if ( b > a) return 1;
	if ( b < a) return -1;
});

//Перерисовка DOM:
for (let i = 0; i < sortedLinks.length; i++) {
	ul.children[i].innerHTML = sortedLinks[i];
}








