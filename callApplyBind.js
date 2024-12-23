/*
1.call() is a method,which can directly prints Output.Without Using it in "console.log()".

2.apply() is same as call() method,which can also directly prints Output.Without Using it in "console.log()".But the arguments from
global method/function should be listed inside ArrayList[].

3.But whereas bind() is Different from call(),apply() methods,bind() creates a copy of that method, which can be used/Invoke later.
  we have to call/initiate the method to get the output ,You can see it below.
*/

let userOne = {
    userName: "Shankar",
    userAge: 25,
    userCity: "Vizag"
}

let combiner = function(profession,sector){
    console.log(`${this.userName} is of Age ${this.userAge} & he is From City ${this.userCity}, works as ${profession} in ${sector} Sector.`);
    
}

combiner.call(userOne,"Software Developer","IT");

let userTwo = {
    userName: "Neeli",
    userAge: 26,
    userCity: "Visakhapatnam"
}

combiner.call(userTwo,"WildLife Photographer, Solo Traveller","Photography");

combiner.apply(userTwo,["Assistant Professor","Teaching"])

let userThree={
    userName: "Bhargav",
    userAge: 19,
    userCity: "kollam"
}
let bindMethod = combiner.bind(userThree,"Artist,painting","Arts");
bindMethod();
