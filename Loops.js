//Foreach Method
let obj = [
    {name : "sai",class : 12},
    {name : "shankar",class : 9},
    {name : "Venkat",class : 8},
    ];
let userTwo={
    userName :"Shankar Neeli",
    userAge: 26,
    isLoggedIn: true
}

// obj.forEach( (item)=>{console.log(`Item ${item.name} and its Values are ${item.class} `)});

// let numbers = [1,2,3,4,5];
// numbers.forEach( (num)=>{console.log(num + 10)});

//map()

// let numbers = [1,2,3,4,5,6,7];
// let newNum1 = numbers.map( (num)=> num + 10);
// let newNum = numbers.map( (num)=>{return num + 10});

// /*while writing callback function if we use curly braces, then we should write return keyword, or undefined comes.
//  we can also write callback function without using braces,if there single line of code.*/

// console.log(newNum);


//filter()

// let numbers = [1,2,3,4,5,6,7];
// let newNum = numbers.filter( (num)=>{return num < 5});

// /*while writing callback function if we use curly braces, then we should write return keyword, or undefined comes.
//  we can also write callback function without using braces,if there single line of code.*/

// console.log(newNum);

//chaining methods

let numbers = [1,2,3,4,5,6,7];
let newNum = numbers
.map( (num)=>{return num + 10})
.map( (num)=>{return num -5 })
.filter( (num)=>{return num > 5})
// console.log(newNum)


//for..of(works only with Arrays,strings,maps,sets.)

// let arr = [1,2,3,4,5];
// for(const r of arr){
//     console.log(r);
// }


//for..in(Works only with Arrays,Objects.)

// let obj1={
//     name:"sai",
//     age:26
// }
// for(let keys in obj){
//     console.log(keys); //we can expect result only keys.
//     console.log(`${keys}: ${obj1[keys]}`); //to get whole object.  
// }

// let arr1 = [1,2,3,4,5];
// for(const r in arr1){
//     console.log(r);
//     //here also we get only indexes of the array.forin produces only indices.
// }


//map() -only works with Arrays & used for computations.
 /*while writing callback function if we use curly braces, then we should write return keyword, or undefined comes.
    we can also write callback function without using braces,if there single line of code.*/

let example = [11,2,3,4,4,5];
let res = example.map(r=>r*2);
// console.log(res);

let arr12=[{name:'sai',age:26},{name:'bhargav',age:20}];
let result = arr12.map(num=>{return num.name});
// console.log(result);



//filter() -only works with Arrays & used for filtering purpose.
/*while writing callback function if we use curly braces, then we should write return keyword, or undefined comes.
we can also write callback function without using braces,if there single line of code.*/

let filter = [1,2,3,4,5,6,7];
let filterResult = filter.filter(num=>{return num % 2 ===0});
// console.log(filterResult);


//reduce()-Only works with Arrays & used for Reducing an array to a single value (e.g., sum, product, etc.)

let reduceEx = [1,2,3,3,5,6];
// reduce(function(accumulator,currentValue){return accumulator + currentValue},initialValue);
let result1= reduceEx.reduce((acc,curr)=>{ return acc+curr},0);
// console.log(result1);



// Old Practice..
// Part 1
// 2.Creating an array of 15 objects with Shankar Neeli,age,gender, location

let users = [
    { name: 'Sanya', age: 28, gender: 'Female', location: 'Delhi' },
    { name: 'Rajesh', age: 32, gender: 'Male', location: 'Mumbai' },
    { name: 'Kavita', age: 17, gender: 'Female', location: 'Bangalore' },
    { name: 'Amit', age: 30, gender: 'Male', location: 'Kolkata' },
    { name: 'Anita', age: 35, gender: 'Female', location: 'Chennai' },
    { name: 'Vijay', age: 27, gender: 'Male', location: 'Hyderabad' },
    { name: 'Pooja', age: 34, gender: 'Female', location: 'Ahmedabad' },
    { name: 'Ravi', age: 12, gender: 'Male', location: 'Pune' },
    { name: 'Meera', age: 31, gender: 'Female', location: 'Jaipur' },
    { name: 'Alok', age: 26, gender: 'Male', location: 'Lucknow' },
    { name: 'Neha', age: 23, gender: 'Female', location: 'Chandigarh' },
    { name: 'Rahul', age: 33, gender: 'Male', location: 'Indore' },
    { name: 'Kiran', age: 28, gender: 'Female', location: 'Bhopal' },
    { name: 'Ashish', age: 30, gender: 'Male', location: 'Nagpur' },
    { name: 'Sneha', age: 29, gender: 'Female', location: 'Surat' }
  ];
  
  // 3. Creating a function which has users under 18yrs of age.

function isAdult(users){
  return users>=18;
}
  // 4. Creating an new array to filter the users from above created function. 

let adultUser = users.filter((user)=>{
  return isAdult(user.age)
})
console.log(adultUser);

  // 5. Printing full names for the adult users

  let getfullname =adultUser.map(user=>{
    return user.name + " - " + user.location;
  })
  console.log(getfullname);

// 6. Printing full names for All the users.

let usernames = users.map(user=>{
  return user.name + " " + user.location;
})
console.log(usernames);


// Part 2

// 1. Creating a function to return Ture/False for the matching gender given below

function filterByGender (users , userGender){
  let genarray = users.map((user) => {
    if (user.gender== userGender){
      return true;
    }
    else {
      return false;
    }
  })
 return genarray;
}

let filterbygender= filterByGender(users,"Male");
console.log(filterbygender);

// 2.  Creating an Array for female users & printing their name using Chaining Technique.

let femaleUsers = users.filter((user)=>{
  return user.gender == "Female";
}).map((user)=>{
  return user.name;
})

console.log(femaleUsers);

// Part 3. Creating an array of 10 objects of Movies & their properties as below.

let Movies = [
  { title: 'Dilwale Dulhania Le Jayenge', year: 1995, genre: 'Romance', rating: 8.1 },
  { title: 'Kuch Kuch Hota Hai', year: 1998, genre: ' Romance', rating: 7.6 },
  { title: 'My Name Is Khan', year: 2010, genre: 'Drama', rating: 8.0 },
  { title: 'Chennai Express', year: 2013, genre: 'Comedy', rating: 6.0 },
  { title: 'Kabhi Khushi Kabhie Gham', year: 2001, genre: 'Musical', rating: 7.4 },
  { title: 'Don', year: 2006, genre: 'Thriller', rating: 7.1 },
  { title: 'Raees', year: 2017, genre: ' Crime', rating: 6.8 },
  { title: 'Kal Ho Naa Ho', year: 2003, genre: 'Drama', rating: 7.9 },
  { title: 'Om Shanti Om', year: 2007, genre: 'Comedy', rating: 6.7 },
  { title: 'Zero', year: 2018, genre: 'Drama', rating: 5.5 }
];

// Part 4

// 1. Creating a function to return Ture/False for the matching genre given below

function filterByGenre(Movies, myGenre){
  let arraygenre = Movies.map((m)=>{
    if (m.genre == myGenre){
      return true;
    }
    else{
      return false;
    }
  })
  return arraygenre;

}

let filterbygenre = filterByGenre(Movies, "Drama");
console.log(filterbygenre);

// 2. Creating an array to filter the desired genre of the movies & printing their Titles

let movieTitles = Movies.filter((movies)=>{
  return movies.genre == "Comedy";
}).map((movies)=>{
  return movies.title;
})
console.log(movieTitles);

//  Part 5

let combinedResults = [ 
  {adultUser, getfullname, usernames}, 
  {filterbygender, femaleUsers}, 
  {filterbygenre, movieTitles}
  ];

  console.log("Combined Results are as Follows "+ combinedResults);
