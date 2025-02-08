// ShallowCopy - 3 Ways = slice(),concat(), [...OriginalArray] ;

let OriginalArr = [1,2,3,4,5,6];
let OriginalArr2 = [10,9,8,7,6];

// let ShallowCopy = OriginalArr.slice(); //Using slice method.
// let ShallowCopy = OriginalArr.slice(1,5); //(Copying a Portion of the Array)

// let ShallowCopy = OriginalArr.concat(); //Using concat method.
// let combinedCopy = OriginalArr.concat(OriginalArr2); //(Combining Arrays While Copying)
// console.log(combinedCopy);

// let ShallowCopy = [...OriginalArr]; //Using Spread Operator.
// let ShallowCopy = [100,...OriginalArr,200]; //(Shallow Copy with Additional Elements):

// ShallowCopy[1]=10;
// console.log("OriginalArray: ",OriginalArr);
// console.log("ShallowCopy: ",ShallowCopy);


//DeepCopy - has multipleWays
//1.JSON.parse()+JSON.stringify() 2.Recursive Function  3.map() + Object.assign()  4.structuredClone() 5.Lodash _.cloneDeep() library 

let originalArray = [1,2,{a:10,b:20},[44,60,70]];

// let deepCopy = JSON.parse(JSON.stringify(originalArray)); //1st Way
// deepCopy[2].b=7;
// deepCopy[3][0]=1;
// console.log(originalArray);
// console.log(deepCopy);


// let deepCopy1 = structuredClone(originalArray); //2nd Way
// deepCopy1[3][2]=10;
// deepCopy1[2].a=100;
// console.log(originalArray);
// console.log(deepCopy1);








