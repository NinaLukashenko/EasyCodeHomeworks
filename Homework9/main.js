//destructuring 1.1
function getFirstArgumentAndRest() {
	let array = [];
	for (let i = 0; i < arguments.length; i++) {
		array.push(arguments[i]);
	}
	const [first, ...others] = array;

	return {first: first, others: others};
}

console.log( getFirstArgumentAndRest('a', 'b', 'c', 'd') );

//destructuring 1.2
const organisation = {
	name: 'Google',
	info: { employees: ['Vlad', 'Olga'], partners: ['Microsoft', 'Facebook', 'Xing'] }
};

function getInfo(object) {
	let { name: Name, info: { partners: [company1, company2] } } = object;
	if (!Name) { Name = 'Unknown' }

	console.log (`Name: ${Name}`) 
	console.log (`Partners: ${company1} ${company2}`) 
}

getInfo(organisation);

//arrow functions 1.1
const sum = (...props) => {
	const params = props;
	if (!params.length) return 0;
	return params.reduce( (prev, next) => prev + next );
}

console.log( sum(1, 2, 3, 4) );
console.log( sum() );

//this 1.1
const rectangle = {
	width: 25,
	height: 10,
	getSquare() {
		return this.width * this.height;
	}
}

console.log( rectangle.getSquare());

//this 1.2
const price = {
	price: 10,
	discount: '15%',
	getPrice() {
		return this.price;
	},
	getPriceWithDiscount() {
		return this.price * ( 100 - parseFloat(this.discount) ) / 100  ;
	}
}

console.log( price.getPrice() );
console.log( price.getPriceWithDiscount() );

//this 1.3
const object = {
	height: 10,
	getHeightPlusOne() {
		return this.height + 1;
	}
}
console.log( object.getHeightPlusOne() );

//this 1.4
const numerator = {
	val: 1,
	double: function() { 
		this.val *=2 ;
		return this;
	},
	plusOne: function() {
		this.val ++; 
		return this;
	},
	minusOne: function() {
		this.val --;
		return this;
	}
}

numerator.double().plusOne().plusOne().minusOne();

console.log( numerator.val );

//this 1.5
const tablet = {
	price: 5000,
	quantity: 5,
	getTotalCost() {
		return this.price * this.quantity;
	}
}

//this 1.6
const detail = {
	quantity: 10,
	price: 88
}

console.log( tablet.getTotalCost.call(detail) );

//this 1.7
let sizes = {
	width: 5,
	height: 10
};

let getSquare = function () {return this.width * this.height};

console.log( getSquare.call(sizes));

//this 1.8
let element = {
    height: 25,
    getHeight() {return this.height;}
};

let getElementHeight = element.getHeight.bind(element);
console.log( getElementHeight() );
