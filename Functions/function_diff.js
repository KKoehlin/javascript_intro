// Hoisting 

const add2 = (x, y) => { // Arrow functions don't get hoisted 
    return x + y 
}
function adder (x, y) { // functions can be defined after the call 
    return x + y 
}

console.log(add2(2, 5), adder(2, 5))


//Helpers // oter functions down here 

function adder(x, y){ // Functions can defined after the call 
    return x + y
}