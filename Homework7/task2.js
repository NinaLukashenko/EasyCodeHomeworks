//task 2.1
document.querySelector('ul').classList.add('list');


//task 2.2
document.querySelector('ul ~ a').setAttribute('id', 'link');


//task 2.3
let listItems = document.querySelector('ul').children;

for (let i = 0; i < listItems.length; i+=2) {
	listItems[i].classList.add('item');
}


//task 2.4
let allLinks = document.links;

for (let i = 0; i < allLinks.length; i++ ) {
	allLinks[i].classList.add('custom-link');
}