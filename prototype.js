let  arr = ['songs','fights','twists'];

let obj = {username:'sai',age:25};


// Array.prototype.custumArr = function(){
//     console.log("Array Hello World");
    
// }

// Object.prototype.custumObj = function(){
//     console.log("Object Hello World");
    
// }
// obj.custumObj();
// obj.custumArr();//Error comes,as we cannot access functions from Arrays.
// arr.custumArr();
// arr.custumObj();//whereas we can acess functions from objects.as array is also a Object.

let fun = function(){
    console.log("hello!!!");
    
}

/*                  PROTOTYPE CHAINING
                
    arr.__proto__ Output == Array.prototype Output
    arr.__proto__.__proto__ Output === Array.prototype.__proto__ Output === Object.prototype Output ;
    Object.prototype.__proto__ Output === arr.__proto__.__proto__ Output === Null;
    fun.__proto__ Output === Function.prototype Output;
    Function.prototype.__proto__ Output === Object.prototype Output;

    End of the Day everything in Js is an Object.

*/


Function.prototype.myBind = function(){
    console.log("sdfghj");
}


let fun1= function (){
}

fun1.__proto__.myBind();
//This is Prototype Inheritance...


