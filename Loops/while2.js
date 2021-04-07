while2.js
//While Loop 
/*
legend:
    Keyword = while 
    1 = some eval or expression that is true or false

<keyword>(1){
    //Do something 
}
 */

let i = 0 
while(i <= 10){
    console.log(i)
    i++
}

for(let x=0; x<=10; x++){
    for(let y=0; y<=10; y++){
        console.log(x, y)
    }
}

while(true){
    console.log("Help this loop is always true")
    break; // ? What does this do? 
}


let names = ["Justin", "Adam", "Kate", "Jim", "Amy"]
console.log(1)
for (let name in names){
    let curName = names[name]
    console.log(curName)
    if (curName == "Kate"){ break; 
    }
}

// Break / Continue 
let counter = 0 
while(counter <= 20){
    if (counter % 2 === 0){ 
    counter++
    continue // ? What is this
    } 
    console.log(counter)
}   

for(let temp = 100; temp >= 0; temp -=5){
    console.log(temp)
}

let myStart = 100 
while(myStart <= 0){
    console.log(myStart)
    myStart = myStart -= 5 
}