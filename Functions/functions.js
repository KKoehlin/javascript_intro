//name(date) => data out 
// f(x) = x * x // sqr function 
/*
Way one:
<keyword> <yourName>(<what i need to work>){
    //What I do 
    return <something>// what I want to give back
}
 */

// Two ways to write a function in js 
function sqr(x){
    return x * x 
}

console.log(sqr(5))

//Fat arrow function 
let aSqr = (x) => {
    return x * x // explicit return 
}

let bSqr = (x) => x * x
let cSqr = x => x * x // Implicit return

function greet(){ //This needs no parameters to work 
    console.log("Hello World")
}
greet()

let createFullName = (fName, LName) => {
    return `${fName} ${LName}`
}
let fullName = createFullName("Justin", "Ahmann")
console.log(fullName)
