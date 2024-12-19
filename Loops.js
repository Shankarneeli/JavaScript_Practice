//Foreach Method
// let obj = [
//     {name : "sai",class : 12},
//     {name : "shankar",class : 9},
//     {name : "Venkat",class : 8},
    
// ];

// // obj.forEach( (item)=>{console.log(`Item ${item.name} and its Values are ${item.class} `);
// obj.forEach( (item)=>{console.log(item + "hi");
// })

// let numbers = [1,2,3,4,5];
// numbers.forEach( (num)=>{console.log(num + 10)});

//map()
// let numbers = [1,2,3,4,5,6,7];
// let newNum = numbers.map( (num)=>{return num + 10});

// /*while writing callback function if we use curly braces, then we should write return keyword, or undefined comes.
//  we can also write callback function without using braces,if there single line of code.*/

// console.log(newNum);


//filter()

// let numbers = [1,2,3,4,5,6,7];
// let newNum = numbers.filter( (num)=>{return num < 5});

// /*while writing callback function if we use curly braces, then we should write return keyword, or undefined comes.
//  we can also write callback function without using braces,if there single line of code.*/

// console.log(newNum);

//chaining methods

let numbers = [1,2,3,4,5,6,7];
let newNum = numbers
.map( (num)=>{return num + 10})
.map( (num)=>{return num -5 })
.filter( (num)=>{return num > 5})


console.log(newNum);