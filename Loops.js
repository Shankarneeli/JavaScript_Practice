//Foreach Method
let obj = [
    {name : "sai",class : 12},
    {name : "shankar",class : 9},
    {name : "Venkat",class : 8},
    
];
let userTwo={
    userName :"Shankar Neeli",
    userAge: 26,
    isLoggedIn: true
}

// obj.forEach( (item)=>{console.log(`Item ${item.name} and its Values are ${item.class} `)});

// let numbers = [1,2,3,4,5];
// numbers.forEach( (num)=>{console.log(num + 10)});

//map()
// let numbers = [1,2,3,4,5,6,7];
// let newNum1 = numbers.map( (num)=> num + 10);
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
// console.log(newNum)


//for..of(works only with Arrays,strings,maps,sets.)
// let arr = [1,2,3,4,5];
// for(const r of arr){
//     console.log(r);
    
// }


//for..in(Works only with Arrays,Objects.)
// let obj1={
//     name:"sai",
//     age:26
// }
// for(let keys in obj){
//     console.log(keys); //we can expect result only keys.
//     console.log(`${keys}: ${obj1[keys]}`); //to get whole object.  
// }

// let arr1 = [1,2,3,4,5];
// for(const r in arr1){
//     console.log(r);
//     //here also we get only indexes of the array.forin produces only indices.
// }


//map() -only works with Arrays & used for computations.
 /*while writing callback function if we use curly braces, then we should write return keyword, or undefined comes.
    we can also write callback function without using braces,if there single line of code.*/

let example = [11,2,3,4,4,5];
let res = example.map(r=>r*2);
// console.log(res);

let arr12=[{name:'sai',age:26},{name:'bhargav',age:20}];
let result = arr12.map(num=>{return num.name});
// console.log(result);



//filter() -only works with Arrays & used for filtering purpose.
/*while writing callback function if we use curly braces, then we should write return keyword, or undefined comes.
we can also write callback function without using braces,if there single line of code.*/

let filter = [1,2,3,4,5,6,7];
let filterResult = filter.filter(num=>{return num % 2 ===0});
// console.log(filterResult);


//reduce()-Only works with Arrays & used for Reducing an array to a single value (e.g., sum, product, etc.)

let reduceEx = [1,2,3,3,5,6];
// reduce(function(accumulator,currentValue){return accumulator + currentValue},initialValue);
let result1= reduceEx.reduce((acc,curr)=>{ return acc+curr},0);
console.log(result1);
