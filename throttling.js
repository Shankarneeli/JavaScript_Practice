 /*Throttling YouTube Link - https://youtu.be/81NGEXAaa3Y?si=c5JZ69tbeYB9De8M
    Debouncing YouTube Link - https://youtu.be/Zo-6_qx8uxg?si=tcwwRsyNeekEXZnI
    Debouncing & Throttling Theory YouTube Link - https://youtu.be/tJhA0DrH5co?si=oHuUPtAm6GipifEs
    Throttling is useful for scenarios where you want to limit the rate of excution of a function, jst like Debouncing. But Throttling 
    is a technique that ensures a function is only executed once within a specified time interval, no matter how many times the event
    is triggered.for example,to handle scroll or resize events.
 */

const loggerFunc = () => {
    console.count("Throttled Function");
    //The counting numbers come from the console.count().

  }
  const throttle = (fn, limit) => {
    let flag = true;
    return function(){
      let context = this; //  The this keyword refers to the context in which the function is executed.storing "this" keyword in
      // context variable and using it in the apply method, ensures that getData function is called correctly.
      
       let args = arguments;
      // The args variable is an array-like object that contains all the arguments.storing arguments in args as variable 
      // and using it in the apply method, can ensure that the getData function is called with the correct arguments.
      if(flag){
        fn.apply(context, args);
        flag = false;
        setTimeout(() => {
          flag=true;
        }, limit);
      }
    }
  }
  const betterLoggerFunction = throttle(loggerFunc, 1000);
  window.addEventListener("resize",betterLoggerFunction);
  // This is the normal Function without Throttling
  //Check the console for the difference between the calls of Normal Function and the Throttled Function 
  const normalFunc = () => {
    console.count("Normal Function");
  }
  window.addEventListener("resize",normalFunc);
  