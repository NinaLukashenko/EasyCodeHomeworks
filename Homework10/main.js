//constructor 1
function Car(model, age) {
	this.model = model;
	this.age = age;
	this.getModel = function() {		
		return this.model[0].toUpperCase() + this.model.slice(1);
	};
	this.getYear = function() {
		return new Date().getFullYear() - this.age;
	};
};

let lexus = new Car('lexus', 2);

console.log( lexus.getModel() );
console.log( lexus.getYear() );

//constructor 2
function Codify(string) {
	this.showString = function() {
		console.log( this.string = string);
	};
	this.showCodedString = function() {
		this.string = string;
		console.log ( this.string.split('').reverse().join('') )
	};
};

let country = new Codify('Italy');

country.showString();
country.showCodedString();

//сlosure 1
function minus(a = 0) {
	return function(b = 0) {
		return a - b; 
	}
}

console.log( minus(10)(6) );
console.log( minus(5)(6) );
console.log( minus(10)() );
console.log( minus()(6) );
console.log( minus()() );

//сlosure 2
function MultiplyMaker(x) {
	if(!x) { return console.log('Please provide parameter for MultiplyMaker function!' ); };

	return function(y) {
		if(!y) { return console.log('Please provide parameter to the function!'); };

		return x *= y;
	} 
}

const multiply = MultiplyMaker(2);

console.log( multiply(2) );
console.log( multiply(1) );
console.log( multiply(3) );
console.log( multiply(10) );

//сlosure 3
const string = ( function() {
	let _string = '';

	function setString(string) {
		if (!string) {
			_string = '';
		} else if (typeof string === 'number') {
			_string = String(string);
		} else {
			_string = string; 
		}
	} 

	function getString() { return _string; }

	function getLength() { return _string.length; }

	function getReverse() { return _string.split('').reverse().join(''); }

	return {
		setString: setString,
		getString: getString,
		getLength: getLength,
		getReverse: getReverse
	};

}());

string.setString('abcde');

console.log( string.getString() );
console.log( string.getLength() );
console.log( string.getReverse() );

//сlosure 4
const calculator = ( function() {
	let _value = 0;

	function setValue(value) {
		if ( typeof value !== 'number' || isNaN(value) ) {
			console.log('Please provide a number!');
			return;
		}

		_value = value;
		return this;
	}

	function addValue(value) {
		if ( typeof value !== 'number' || isNaN(value) ) {
			console.log('Please provide a number!');
			return;
		}

		_value += value;
		return this;
		
	}

	function minusValue(value) {
		if ( typeof value !== 'number' || isNaN(value) ) {
			console.log('Please provide a number!');
			return;
		}

		_value -= value;
		return this;
	}

	function multiplyValue(value) {
		if ( typeof value !== 'number' || isNaN(value) ) {
			console.log('Please provide a number!');
			return;
		}

		_value *= value;
		return this;
	}

	function divideValue(value) {
		if ( typeof value !== 'number' || isNaN(value) ) {
			console.log('Please provide a number!');
			return;
		}

		_value /= value;
		return this;
	}

	function powValue(value) {
		if ( typeof value !== 'number' || isNaN(value) ) {
			console.log('Please provide a number!');
			return;
		}

		_value = Math.pow(_value, value);
		return this;
	}

	function showValue() {
		console.log( +(_value).toFixed(2) );
	}

	return {
		setValue: setValue,
		addValue: addValue,
		minusValue: minusValue,
		multiplyValue: multiplyValue,
		divideValue: divideValue,
		powValue: powValue,
		showValue: showValue,
	};

}());

calculator.setValue(10).powValue(2).showValue();