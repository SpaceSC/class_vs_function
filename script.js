const pageLoad = () => {
  /*
  class Car {

   // construktor kapja meg a paramétereket, majd this.year-rel hivatkozunk pl. rá 
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  // az age() olyan mint egy függvény, nem kell return stb.
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

// itt példányosítjuk, ekkor fut le:
let myCar = new Car("Ford", 2014);
document.getElementById("demo").innerHTML =
`My car is  ${myCar.age()}  years old.`;
*/
/*
funcuóionná alakítás:
1. kell két praméter
2. age() helyett const age = () ..., eredeti () tartalma this-ek nélkül copy
*/
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
  
  document.getElementById("demo").innerHTML = `My car is a ${car("Ford", 2014).name}, and is ${car("Ford", 2014).age()}  years old.`;

}
window.addEventListener("load", pageLoad);