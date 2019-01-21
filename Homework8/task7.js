let lis = document.querySelectorAll('.dropdown-item');

function showMenu(e) {
	e.currentTarget.querySelector('.dropdown-menu').classList.toggle('d-none');	

	for (let i = 0; i < lis.length; i++) {
	if ( (lists[i].querySelector('.dropdown-menu')) !== (e.currentTarget.querySelector('.dropdown-menu')) ) {
		lists[i].querySelector('.dropdown-menu').classList.add('d-none');
		};
	};
}

let lists = [];

for (let i = 0; i < lis.length; i++) {
	lists.push(lis[i]);
	lists[i].addEventListener('click', showMenu);
	
};