//PROMISES task 1
function promiseCreator(time, value) {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve(value);
      }, time);
  } );
}

const prom = promiseCreator(500, 'Ok!');

prom
  .then(console.log);


//task 2
class Prom { 
  constructor() {
    this.promise = new Promise( (resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    } );
  }
};

const inst = new Prom();

inst.promise
  .then( (data) => console.log(data) )
  .catch( (data) => console.error(data) );

inst.resolve('test');
// inst.reject('Ups');