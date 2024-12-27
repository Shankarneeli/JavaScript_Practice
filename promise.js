// let promiseOne = new Promise(function (resolve,reject){

// setTimeout(function(){
//     console.log("promiseOne is excuted");
//     resolve(); //Never forget to call Resolve here!
    
// },1000)    
// });

// promiseOne.then(function(){
//     console.log("& Resolved succesfully!");
    
// });

// new Promise(function (resolve,reject){
//     setTimeout(function(){
//             console.log("promiseTwo is excuted");
//             resolve(); //Never forget to call Resolve here!
            
//         },1000)  
    
// }).then(function(){
//     console.log("2nd way of writing Promise..");
    
// })

//Async,Await 
// async function promisethree() {
//   try {

//     const response =  await fetch('https://jsonplaceholder.typicode.com/users');
//     let data = await response.json();
//     console.log(data);

//   } catch (error) {

//     console.log(error);

//   }
// }
// promisethree();