// For .. of loop 
/*
legend:
keyword = 'for' 
var = sometemp word you use to refer to the current item
collection = some collection you want to go through ex... array or object or string 

NOTE: This is better usually for arrays and strings if you want the items 

<keyword>(<var> in <collection>){
    // Do something 
}
*/
let students = ['Amy', 'Adam', 'Blake', 'Circe', 'Drew']
for (let student of students){
    console.log(student)
}

let alphabet = 'abccdefghijklmnopqrstuvwxyz'
for (let letter of alphabet){
    console.log(letter)
}

let person = {
    name: "Justin",
    age: 28
}

for(let entry of Object.entries(person)){
   // console.log(property)
    console.log(entry) //A good use of a for in loop 
}