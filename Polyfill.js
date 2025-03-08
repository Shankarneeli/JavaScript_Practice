// POLYFILL - it is a piece of code that add missing functionality to the Old Browsers.Polyfill's are our Own implementation
//  of an in-built method present in JS.


// Polyfill for Map() -for that we have to understand the syntax of a map, it has a (currVal, index & Array) as arguments.
// Syntax for map() - Array.map((num,i,arr))=>{}
Array.prototype.myMap = function(cb){
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i],i,this));
    }
    return temp;
};

let num = [1,2,3,4,5,6];
const mulArr = num.myMap((num,i,arr)=>{
    console.log('index - ',i);
    console.log(arr);
    return num * 4;
})
console.log(mulArr);
// -----------------------------------------------------------------------------
//Polyfill for filter()- Syntax for filter() - Array.filter((num,i,arr))=>{}

    Array.prototype.myFilter= function(cb) {
        let temp = [];
        for (let i = 0; i < this.length; i++) {
            if(cb(this[i],i,this)){
                temp.push(this[i]);
            }            
        }
        return temp;
    }

    let num1 = [1,2,3,4,5,6];
const evenNums = num1.myFilter((num,i,arr)=>{
    // console.log('index - ',i);
    // console.log(arr);
    return num >= 4 ;
    // return num % 2 ===0 ;
})
console.log(evenNums);

// -----------------------------------------------------------------------------
//Polyfill for reduce()- Array.reduce((arr,curr,i,arr)=>{},initialValue);

Array.prototype.myReduce = function(cb,initialValue){
    var accumulator = initialValue;

    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator?cb(accumulator,this[i],this) : this[i] ;
    }
    return accumulator;
}

let numbers =[1,2,3,4,5,6,7,8,9];

const sum = numbers.myReduce((acc,curr,i,arr)=>{
    return acc + curr

},0);

console.log(sum);

// -----------------------------------------------------------------------------
//Polyfill for forEach() - should follow same as map(),jst without having a new array.

Array.prototype.myForEach = function(cb) {
    for (let i = 0; i < this.length; i++) {
        cb(this[i], i, this);
    }
};

let nums = [1, 2, 3, 4, 5, 6];
nums.myForEach((num, i, arr) => {
    console.log('Value:', num);
    console.log('Index:', i);
    console.log('Array:', arr);
});
