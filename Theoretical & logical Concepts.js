/*1.when you convert string to number & print the value, we get - result as NaN. 
let str = "abc";
let num = Number(str); // num will be NaN

let str = "abc";
let num = +str; // num will be NaN

/*2.when you convert null to number & print the value, we get - result as 0.
let num = Number(null); // num will be 0

let num = +null; // num will be 0

/*3.when you convert undefined to number & print the value, we get - result as NaN.
let num = Number(undefined); // num will be NaN

let num = +undefined; // num will be NaN

/*4.when you convert true to number & print the value, we get - result as 1.
/*5.when you convert false to number & print the value, we get - result as 0.

console.log(typeof(NaN));
console.log(typeof(null));
console.log(typeof(undefined));
console.log(typeof(Boolean));
console.log(typeof(String));
console.log(typeof(function(){}));
console.log(typeof(Object));
*/

// let str = new String("Hello-merey-Bhai-logon");
// let str2 = "bhai-namaste-bhai";
// console.log(str);
// console.log(str.slice(0,6));
// console.log(str.split("-"));
// console.log(str2.split("-"));

// #Math.random Concept
// let min = 7;
// let max =24;
// console.log(Math.floor(Math.random()*(max - min + 1)+ min));

// console.log(Array.from("Shankar")); //this string is converted into an individual array, bcz of "Array.from"

var1 = 'bhargav';
var2 = 'Venkat';
var3 = 'sai';

// console.log(Array.of(var1,var2,var3,"Shankar")); 
//this variables are merged into an array, bcz of "Array.of"


// //Objects
// var city = Symbol("City"); //Way to use to Symbol datatype in objects.
// let obj = {
//     name : "Shannu",
//     age : 25,
//     [city]:"Vizag", //initialize in this way.
//     isLoggedIn : true

// }
// console.log(obj);
// console.log(obj.name); //way to print specific value from Object
// console.log(obj["isLoggedIn"]); //Another way to print specific value from Object
// console.log(obj[city]); //Only way to print specific symbol value.
// Object.freeze(obj); //This isi used to freeze the object,so changes can't be done after this.


// Printing Date with modern techniques

const locale = 'en';
const options = {numeric:'auto'};
const formatter = new Intl.RelativeTimeFormat(locale,options);
// console.log(formatter.format(3,'month'));
// console.log(formatter.format(-1,'day'));
// console.log(formatter.format(-10,'hour'));

//Hoisting & Temporal Dead Zone

// console.log(`1st Line ${newVar}`);
// var newVar = 'Hi!!,Shankar..';
let newVar = 'Hi!!,Shankar..';
// console.log(`last Line ${newVar}`);

// Temporal Dead Zone- when we declare a variable with (let or const),it is said to be in the TDZ from the start of the block 
// until the variable is initialized.During this zone if u try to access the varaible,u will get "ReferenceError".

// The TDZ helps ensure that variables are not used before they are properly declared and initialized, 
// which can help prevent bugs in your code.


//spread operator

let a =[1,2,3,4];
let b = [0,9,8,7,6];

let c = [...a,...b];
// let c = [a,b];
console.log(c);

//Password strengthen code

function checkPasswordStrength(password) {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    
    switch(strength) {
        case 0: case 1: case 2: return '😱 Weak';
        case 3: return '😐 Moderate';
        case 4: return '😊 Strong';
        case 5: return '💪 Very Strong';
    }
}
console.log(checkPasswordStrength('P@ssw0rd'));

//Write code that array returns only even number.
function findEvenNumbers(arr) {
 const result = [];
 for (let i = 0; i < arr.length; i++) {
 if (arr[i] % 2 === 0) {
 result.push(arr[i]); 
 // Add even numbers to the result array
 }
 }
 return result;
}
// Example usage:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8,-8,19, 9, 10];
console.log("Even numbers:", findEvenNumbers(numbers));

//we can change the title of any website using this logic in JS.
let val = 7;
document.title = `(${val}) | Shankar Neeli`;


// Learn about getBoundingClientRect() in DOM****

// Function Currying
function add(a) {
    return function (b) {
        if (b) return add(a+b);
         return a;   
    }
}
console.log(add(5)(2)(5)(5)(5)());
