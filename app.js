//string concatenation is adding strings together
const name = 'Gisele';
const age = 16;

console.log(`Hello it's me ${name} and my age is ${age}`) 

const combined = name + age; //results in string

console.log(typeof combined);


//Numbers
const num1 = 100;
const num2 = 50;
let val;

//Math object
val = Math.PI;
val = Math.E;
val = Math.round(2.8);
val = Math.ceil(2.4); //round up
val = Math.floor(2.8); //round down
val = Math.sqrt(64);
val = Math.abs(-9);
val = Math.pow(8, 2);
val = Math.min(2,33,5,6,3); //returns smallest value
val = Math.random(); //returns random decimal

val = Math.floor(Math.random() * 20); //to give random number btwn 1 and 20

console.log(val);