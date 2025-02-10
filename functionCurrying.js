// Function Currying- The curried function is broken down into multiple functions that each take a single argument.

// Example with Closures
let mainFun = function(a){
    return function(b){
        console.log(a*b);
        
    }
}

let curryingFunction = mainFun(7);
curryingFunction(7);

// Example with Closures
let fullName = function(name){
    return function(surName){
        console.log(name+" "+surName);
        
    }
}

let userDetails = fullName("Shankar");
userDetails("Neeli");


// Example with bind()- unlike call(),apply(). bind() creates a copy of main function.

let calculateVolume=function(h,l,w){
    return h*l*w;
}
let calculatingVolume = calculateVolume.bind(null,7);
let calculatingVolumeWithLength = calculatingVolume.bind(null,5);

console.log(calculatingVolume(2,5));
// or
console.log(calculatingVolumeWithLength(5));