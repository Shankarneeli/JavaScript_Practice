//classes in JavaScript

class Student {
    constructor(studentName,standard,rollNo) {
        this.studentName=studentName;
        this.standard=standard;
        this.rollNo=rollNo;
        
    }

    //a Method/Function is declared in this way.
    classMonitor(){
        return `${this.studentName} will be our new Class Monitor this Year for class ${this.standard}`;
    }


    firstRank(){
        return `Rollno ${this.rollNo} scored highest score for this Halfyearly Exams.`
    }
}

let result = new Student("Shankar",9,444);
console.log(result);
console.log(result.classMonitor());
console.log(result.firstRank());
console.log(result.rollNo);
console.log(result.standard);
console.log(result.studentName);
console.log("--------------------------");




//implementing same content with functions.

function user(userName,email,password){
    this.userName = userName;
    this.email = email;
    this.password = password;
}

//we can inject/insert methods inside a function using "PROTOTYPE" globally,where any function can call this methods.

user.prototype.encrpytPassword = function(){
    return `${this.userName}'s Password is ${this.password}xyz.`
}

user.prototype.userDetails = function(){
    return `New User has been registered in the Website with UserName ${this.userName}, with Email Address ${this.email}.`
}

let chai = new user("Bhargav","bhargav@gmail.com","Password"); //Creating new objects using "new" Keyword. User1
let coffee = new user("Venkat Sai","sai@gmail.com","Lucifer"); //Creating new objects using "new" Keyword. User2

console.log(chai.userDetails());
console.log(chai.encrpytPassword());

console.log(coffee.userDetails());
console.log(coffee.encrpytPassword());



