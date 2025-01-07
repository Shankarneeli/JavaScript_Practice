
/*1.when you convert string to number & print the value, we get - result as NaN.
/*2.when you convert null to number & print the value, we get - result as 0.
/*3.when you convert undefined to number & print the value, we get - result as NaN.
/*4.when you convert true to number & print the value, we get - result as 1.
/*5.when you convert false to number & print the value, we get - result as 0.
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
