let promiseOne = new Promise(function (resolve,reject){
setTimeout(function(){
    console.log("promiseOne is excuted");
    resolve(); //Never forget to call Resolve here!
},1000)    
});

promiseOne.then(function(){
    console.log("& Resolved succesfully!");
});
//another Way of Writing PROMISE

let pro = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("SetTimeout called");

    let success = Math.random() > 0.5; // Randomly decide success or failure

    if (success) {
      resolve();
    } else {
      reject("❌ Rejected due to an error!");
    }
  }, 1000);
});

pro
  .then(function () {
    console.log("✅ Resolved successfully!");
  })
  .catch(function (error) {
    console.error(error);
  });

//another Way of Writing PROMISE
new Promise(function (resolve,reject){
    setTimeout(function(){
            console.log("promiseTwo is excuted");
            resolve(); //Never forget to call Resolve here!
            
        },1000)  
}).then(function(){
    console.log("2nd way of writing Promise..");  
})


// Async,Await 
async function promisethree() {
  try {
    const response =  await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
promisethree();

async function promiseFour(){
    try{
        const res = await fetch('https://google.com');
        let Data = await res.json();
        console.log(Data);
    } catch(error){
        console.log(error);
}
