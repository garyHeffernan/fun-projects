// created a constant variable named kelvin that takes the value of 293
const kelvin = 0;
//created a constant variable named celsius that takes the value of kelvin minus 273
const celsius = kelvin - 273;
// created a variable type that allows me to change its value named fahrenheit that takes the value of celsius times nine fifths plus 32
let fahrenheit = celsius * (9/5) + 32;
// converting from Celsius to Fahrenheit often gets you a decimal. The method Math.floor() rounds the Fahrenheit temperature down. fahrenheit variable was created as a "let" not a "const" so it can change
fahrenheit = Math.floor(fahrenheit);
console.log("The temperature is " + fahrenheit + " degrees Fahrenheit.");
//convert to Newton
let newton = celsius * (33/100);
// round down
newton = Math.floor(newton);
console.log("The temperature is " + newton + " degrees Newton.");
