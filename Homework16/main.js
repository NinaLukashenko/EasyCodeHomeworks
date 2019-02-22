//Homework task-1:
function Planet(name) {
  this.name = name;
  this.getName = function() {
    return 'Planet name is ' + this.name;
  }
}

function PlanetWithSatellite(name, satelliteName) {
  Planet.call(this, name);

  var gotPlanetName = this.getName() + '. ';

  this.getName = function() {
    return  gotPlanetName + 'The satellite is ' + satelliteName + '.';
  }
}

var earth = new PlanetWithSatellite('earth', 'moon');
var mars = new PlanetWithSatellite('mars', 'fobos');

console.log( earth.getName() );
console.log( mars.getName() );


//Homework task-2:
function Building(name, floors) {
  this.name = name;
  this.floors = floors;
}

Building.prototype.getNumberOfFloors = function() { 
  return this.floors;
  };

Building.prototype.setNumberOfFloors = function(value) {
  return  this.floors = value;
  };


function House(name, floors, flats) {
  Building.call(this, name, floors);
  this.flats = flats;
}

//Наследуем прототип родителя в прототип наследника:
House.prototype = Object.create(Building.prototype);
//“Возвращаем” наследнику “потерянное” свойство constructor:
House.prototype.constructor = House;

House.prototype.getNumberOfFloors = function() {
  return {
    floors: this.floors,
    totalFlats: this.floors * this.flats
  };
}

var myHouse = new House('Eureka', 25, 4);

console.log( myHouse );
console.log( myHouse.getNumberOfFloors() );


function Mall(name, floors, shops) {
  Building.call(this, name, floors);
  this.shops = shops;
}

Mall.prototype = Object.create(Building.prototype);
Mall.prototype.constructor = Mall;

Mall.prototype.getNumberOfFloors = function() {
  return {
    floors: this.floors,
    totalShops: this.floors * this.shops
  };
}

var myMall = new Mall('Dream Town', 4, 10);

console.log( myMall );
console.log( myMall.getNumberOfFloors() );


//Homework task-3:
function Furniture(name, price) {
  this.name = name;
  this.price = price;
}

Furniture.prototype.getInfo = function() {
  return 'It is a ' + this.name + '. Its price is '  + this.price + '. ';
}

var officeFurniture = new Furniture('desk', 500);
var homeFurniture = new Furniture('bed', 1000 );

officeFurniture.condition = 'used';

officeFurniture.getInfo = function() {
 var originResult = Furniture.prototype.getInfo.call(this);
 return originResult + 'Its condition is ' + this.condition + '.';
}

homeFurniture.condition = 'new';

homeFurniture.getInfo = function() {
  var originResult = Furniture.prototype.getInfo.call(this);
  return originResult + 'Its condition is ' + this.condition + '.';
}

console.log( officeFurniture.getInfo() );
console.log( homeFurniture.getInfo() );


//Homework task-4:
function User(name, date) {
  this.name = name;
  this.registerDate = date;
}

User.prototype.getInfo = function() {
  return 'My name is ' + this.name + '. I was signed in ' + this.registerDate + '. ';
}

function Admin(name, date) {
  User.call(this, name, date);
  this._superAdmin = true;
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

Admin.prototype.getInfo = function() {
 var previousResult = User.prototype.getInfo.call(this);
 return previousResult + 'I am super admin: ' + this._superAdmin + '.';
}

var tom = new Admin('Tom', '02.08.2015');

console.log(tom);
console.log( tom.getInfo() );

function Visitor(name, date, validDate) {
  User.call(this, name, date);
  this.validDate = validDate;
}

Visitor.prototype = Object.create(User.prototype);
Visitor.prototype.constructor = Visitor;

Visitor.prototype.getInfo = function() {
  var previousResult = User.prototype.getInfo.call(this);
  return previousResult + 'My access is valid till ' + this.validDate + '.';
}

var spike = new Visitor('Spike', '22.02.2019', '22.03.2019');

console.log(spike);
console.log( spike.getInfo() );