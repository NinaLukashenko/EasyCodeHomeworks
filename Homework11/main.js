//AJAX:
const url = 'https://jsonplaceholder.typicode.com'; 

class CustomHttp {
	get(url, callback) {
		const xhr = new XMLHttpRequest();
		xhr.open('GET', url);
		xhr.send();
		xhr.addEventListener('load', () => callback(xhr.responseText));
	}
}

const httpClient = new CustomHttp();

httpClient.get(`${url}/users`, (response) => {
	let users = JSON.parse(response);
	console.log(users);

	users.forEach( (item) => {
		const template = `<tr><td data-id=${item.id}>${item.name} <button type="button" class="btn btn-info">See Profile</button></td></tr>`;
	    document.querySelector('#users tbody').insertAdjacentHTML('beforeend', template);
	} );

	let table = document.querySelector('table');
	table.addEventListener('click', (e) => {
		e.preventDefault();
		if (e.target.classList.contains('btn-info')) {
			const dataId = +e.target.closest('td').dataset.id;
			showUserDetails(dataId);
		}
	});

	function showUserDetails(dataId) {
		for (let i = 0; i < users.length; i++) {
			if (users[i].id === dataId) {
				document.querySelector('#details-block').innerHTML = '';
				const template = `
						<table class="table table-bordered">
							<thead class="thead-light">
								<tr>
									<th>${users[i].name}</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Username: ${users[i].username}</td>
								</tr>
								<tr>
									<td>Website: ${users[i].website}</td>
								</tr>
								<tr>
									<td>Phone: ${users[i].phone}</td>
								</tr>
								<tr>
									<td>E-mail: ${users[i].email}</td>
								</tr>
								<tr>
									<td>Company: ${users[i].company.name}</td>
								</tr>
								<tr>
									<td>Address: ${users[i].address.city}</td>
								</tr>
							</tbody>
						</table>			
				`;
				document.querySelector('#details-block').insertAdjacentHTML('afterbegin', template);	
				break;			
			}
		}
	}
});

//Class:
//task 1
class Component {
	constructor(tagName = 'div') {
		this.tagName = tagName;
		this.node = document.createElement(tagName);
	}
}

const comp = new Component('span');
console.log( comp );

//task 2
//Component is renamed in Component2 as first one is already used
class Component2 {
	constructor(tagName = 'div') {
		this.tagName = tagName;
		this.node = document.createElement(tagName);
	}

	setText(text) {
		this.node.textContent = text;
	}
}

const comp2 = new Component2('p');
comp2.setText('Lorem ipsum');
console.log ( comp2 );

//task 3
class Calculator {
	constructor(value) {
		this._number = value;
	}

	get number() {
		return this._number;
	}

	set number(newValue) {
		this._number = newValue;
	}

	addNumber(value) {
		return this._number += value;
	}

	minusNumber(value) {
		return this._number -= value;
	}

	multiplyNumber(value) {
		return this._number *= value;
	}

	devideNumber(value) {
		return this._number /= value;
	}
}

const calc1 = new Calculator(12);
calc1.number = 0;
console.log (calc1.addNumber(5)); 
console.log (calc1.minusNumber(1)); 
console.log (calc1.multiplyNumber(5)); 
console.log (calc1.devideNumber(2)); 
