const name = "gisele";

//variables inside the function is only in the function 
//variable in global scope is avaible everywhere
function adder(num1, num2){   //inside parenthesis is a parameter
    console.log(num1 + num2);
}

function upperCase(text){
    const upperCased = text.toUpperCase();
    console.log(upperCased);
}

const toUpper = () => {
    //shortest way to write a function
}

//function with parameters
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15){  //parameters are placeholders
    console.log('Running Calculate Bill');
    const total = billAmount + (billAmount * taxRate) + (billAmount * tipRate);
    return total;
}

//const myTotal = calculateBill(100, 0.13); //arguements are actual values

//function definition
function sayHiTo(firstName){
    return `Hello ${firstName}`;
}

const greeting = sayHiTo('Gisele');
console.log(greeting);

//const myTotal3 = calculateBill(20 + 20 + 30, 0.15)

function doctorize(name) {
    return `Dr. ${name}`;
}

function yell(name = 'Silly Goose') { //can put default 
    return `HEY ${name.toUpperCase()}`;
}

//yell(doctorize('Gisele'));

const myBill4 = calculateBill(100, undefined, 0.2)
console.log(myBill4)