// Let Const Var ... others 
let x = 5 //let will expose the variable to its scope
const favNum = 42 // const can't be reassigned
favNum = 50

var z = 10 // for now these are = 
y = 5 // and should I say =ly bad 

x = 9 // x is being reassigned <- this is fine 

// Scope 
if(true){ // this is a code block
    let x = 8 // x in here is not the x on line 2 
    console.log(x)
}
console.log(x)

for (let i = 0; i < 10; i++){
    console.log(i)
}
console.log(i) // i has been garbage collected 
console.log(i)

for (let j = 0; j < 10; j++){
    console.log(j)
}