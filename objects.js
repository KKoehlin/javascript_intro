//Objects 

/*
syntax: 

{
    k1: v1, 
    k2: v2
}

Keys can be in "" but don't have to be if they are valid var names, 
i.e. they don't start with a "number" or have invalid chars,  or has spaces
*/

console.log(typeof console)

let obj1 = {
    name: "Justin"
}

let obj2 = { 
    "name": "Amit"
}

// There are two ways to get things out of objects "Dot"notation and 
//"square bracket" notation

console.log(obj1.name)
console.log(obj1["name"])

let car = {
    make: "Jeep",
    model: "Wrangler",
    year: 2020, 
    miles: 10_000,
    owners: ["Amy", "Josh"]
}
console.log(car.miles)
console.log(car["miles"])
console.log(car.owners[0]) //obj can hold more then just primitive types 


let person = {
    fName: "Justin",
    lName: "Ahmann",
    fullName: function(){
        return `${this.fName} ${this.lName}`
    },
    greet: function(greetWord){
        return `${this.greetWord}, ${this.fName}`
    }
}
console.log(person.fName)
console.log(person.fullName())
console.log(person.greet("Hello"))

//This demo shows we can add new keys through assignment 
let builderObj = {} // An empty obj
console.log(builderobj)
builderObj.name = "Justin"
builderObj["age"] = 28 
console.log(builderobj) 

// A Look aheard STACKS and QUEUES <= we can build this with objects 
// Stacks are LIFO(last in first out)
//Queues are FIFO (first in first out)
