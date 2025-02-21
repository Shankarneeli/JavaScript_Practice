
console.log(Math.PI);
Math.PI = 7;
console.log(Math.PI);

let result = Object.getOwnPropertyDescriptor(Math,'PI');
// console.log(result);


let obj ={
    userName :"shankar", 
    age:25, 
    isAvaialable:false
};

console.log(obj);

//To know the behind inDepth properties of the specific attribute/KeyValue pair of local object, 
// we use  "Object.getOwnPropertyDescriptor()".

let descriptorKey1 = Object.getOwnPropertyDescriptor(obj,'userName');
let descriptorKey2 = Object.getOwnPropertyDescriptor(obj,'age');
let descriptorKey3 = Object.getOwnPropertyDescriptor(obj,'isAvaialable');

/*let descriptor = Object.getOwnPropertyDescriptor(obj,'userName','age','isAvaialable');
we cannot access all the key values of the Object at a time, only single key is allowed.
*/

// console.log(descriptorKey1);
// console.log(descriptorKey2);
// console.log(descriptorKey3);

//we can manually set the properties of our attributes by using  "Object.defineProperty()".

Object.defineProperty(obj,"userName",{ 
    //initially they are all true, we manually changed to "false"
    writable: false, 
    /*Writable attribute indicates whether the value of a property can be changed.
    If writable: true, the property value can be changed.
    If writable: false, the property value is read-only and cannot be changed. */

    enumerable: false, 
    /*Enumerable attribute indicates whether a property will show up during iteration of the object's properties, 
    such as in a for...in loop or Object.keys() method.
    If enumerable: true, the property will be included in loops that enumerate properties.
    If enumerable: false, the property will be ignored in such loops. */


    configurable: false 
    /*Configurable attribute determines if a property can be deleted from the object and if its attributes(like writable, enumerable) 
    can be modified.
    If configurable: true, the property can be deleted, and its attributes can be changed.
    If configurable: false, the property cannot be deleted, and its attributes are locked. */ 
});


let descriptorTest = Object.getOwnPropertyDescriptor(obj,'userName');

// console.log(descriptorTest);//here we can see all the properties are false,as we manually changed above.


//we can try getOwnPropertyDescriptor to Array like below.
let A = ['Shankar','sai','bhargav'];
let output = Object.getOwnPropertyDescriptor(A, '1'); // Accessing the property at index 1
console.log(output);

