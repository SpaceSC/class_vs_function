const pageLoad = () => {
 
  /*
  class Car {
    
   // construktor kapja meg a paramétereket, majd this.year-rel hivatkozunk pl. rá 
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }

    // az age() olyan mint egy függvény
    age() {
      let date = new Date();
      return date.getFullYear() - this.year;
    }

    ifOld() {
      return this.age() < 10 ? "a new" : "an old";
    }
  */
 
 // constructor megoldás

 function Car(name, year) {
  this.name = name;
  this.year = year;
  this.age = function age() {
      let date = new Date();
      return date.getFullYear() - this.year;
    };
  this.old = function ifOld() {
      return this.age() < 10 ? "a new" : "an old";
    };
  }


// itt példányosítjuk, ekkor fut le:
let myCar = new Car("Ford", 2014);

document.getElementById("root").innerHTML =
`My car is a ${myCar.name}, and is ${myCar.age()} years old. This is ${myCar.old()} car.`;

//// Object constructor / prototype / object method ////
/* constructor

function Car(name, year) {
  this.name = name;
  this.year = year;
  this.age = age() {
      let date = new Date();
      return date.getFullYear() - this.year;
    };
  this.old = ifOld() {
      return this.age() < 10 ? "a new" : "an old";
    };
}

*/

/*
functionná alakítás:
1. kell két praméter
2. age() helyett const age = () ..., eredeti () tartalma this-ek nélkül copy
*/

/* FUNCTION
  const car = (name, year) => {

    return {
      name: name,
      year: year,
      age: () => {
        let date = new Date();
        return date.getFullYear() - year;
      }
    }
  };

  //console.log(car("Ford", 2014))
*/


// function esetén
 /* document.getElementById("demo").innerHTML = `My car is a ${car("Ford", 2014).name}, and is ${car("Ford", 2014).age()}  years old. This is ${ifOld()}`;
 */

}
window.addEventListener("load", pageLoad);