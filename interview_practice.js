// 1. Write a program to remove duplicates from an array ?

// Way1
// function removeDuplicates(arr){
//     return [...new Set(arr)];
// }
// removeDuplicates([1,2,2,2,1,3,4,5,2,1,7]);

// // way2
// function noDuplicates(arr){
//     return Array.from(new Set(arr));
// }
// console.log(noDuplicates([1,2,2,2,3,3,4,1,5,6,7,8]));

// -------------------------------------------------------------------------------------------------------
// 2. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
// function findEven(arr){
//     const result = [];

//     for(let i=0;i<arr.length;i++){
//         if(arr[i] % 2 ===0){
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }
// const evenNumbers = [1,3,5,6,2,8,10,22,12,31];
// console.log(`Even Numbers: ${findEven(evenNumbers)}`);

// -------------------------------------------------------------------------------------------------------
// 3.Generate Random Colors

// a.Create a HexCode in single line
// let hexCode = `#${Math.random().toString(16).slice(2,8).padEnd(6,0)}`;
// console.log(hexCode);

//  let hexCodes = `#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6,'0')}`;
//  console.log(hexCodes);

// toString(16) - Converts a number to a string in base 16 (hexadecimal representation).
// Math.random() returns decimal,starts with 0.using toString(16)converts after decimal point numbers to hexadecimal digits(e.g- 0.bc91a3)
// slice(2,8)- selects from 2nd Index & upto 8-1th index,therefore returns 6 digits.
// padEnd(6,0)-This method Ensures the resulting hex string has exactly 6 characters.If the extracted string from Math.random() has
//  fewer than 6 characters, .padEnd(6, '0') appends '0' to the right to make it a 6-character hex code.

//b. Using regb colors
// take a button from html,add eventListner to it
// button.addEventListener('click',()=>{
//     let r = Math.floor(Math.random()*256);
//     let g = Math.floor(Math.random()*256);
//     let b = Math.floor(Math.random()*256);

//     body.style.backgroundColor = `rgb(${r},${g},${b})`
// })
// -------------------------------------------------------------------------------------------------------

// 4.passwordGenerator

function passwordGenerator(
  length,
  includeUpperCase,
  includeLowerCase,
  includeNumbers,
  includeSymbols
) {
  const numbers = "0123456789";
  const lowerCaseAlphabets = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const symbols = "~@#$%^&*_<>?/";

  let allowedChars = '';
  let password = '';

  allowedChars += includeUpperCase ? upperCaseAlphabets : '';
  allowedChars += includeLowerCase ? lowerCaseAlphabets : '';
  allowedChars += includeNumbers ? numbers : '';
  allowedChars += includeSymbols ? symbols : '';

//   console.log(allowedChars);
  
  if(length <=5){
    //   console.log("Password should atleast be 6 characters Strong log.");
      return "Password should atleast be 6 characters Strong.";
  }

  if(allowedChars.length === 0){
    // console.log("Atleast 1 set of Character must be True");  
    return "Atleast 1 set of Character must be True";  
  }

  for(let i=0; i< length;i++){
    let randomIndex = Math.floor(Math.random()* allowedChars.length);
    password += allowedChars[randomIndex];
  }

  return password;
}
const passwordLength = 10;
const includeUpperCase = true;
const includeLowerCase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = passwordGenerator(
  passwordLength,
  includeUpperCase,
  includeLowerCase,
  includeNumbers,
  includeSymbols
);
if(password){
    console.log(`Generated Password: ${password }`);
}else{
    console.log("Something Went Wrong!!!");
    
}

// console.log(String.fromCharCode(Math.floor(Math.random()*26)+ 97)); //prints small letter alphabets.
// console.log(String.fromCharCode(Math.floor(Math.random()*26)+ 65)); //prints Capital letter alphabets.
//these 2 lines prints random aplhabet character.
