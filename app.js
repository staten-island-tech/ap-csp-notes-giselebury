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