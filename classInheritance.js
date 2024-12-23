
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

class Teacher extends Student{
    constructor(studentName,standard,rollNo,subjectName){
        //we should definetly call all the parameters from parent class also.
        super(studentName,standard,rollNo); //as this parameter is already exist in above class,we use super() method.
        this.subjectName= subjectName;
    }

    picinicPlace(){
        console.log(`Class ${this.standard} will be taken to Manali as a Trip this Year`);
        
    }
}

let one = new Teacher("Madhavi",8,44,"Physics");
let two = new Student("Raju",10,4);

one.picinicPlace();
//as picinicPlace() has console.log, we can directly call the method here!!
console.log(one.firstRank());
console.log(two.classMonitor());
//as firstRank(), classMonitor() doesnot have console.log, we should call inside console.log();

console.log(one instanceof Teacher);
console.log(two instanceof Teacher);
console.log(two instanceof Student);
console.log(one instanceof Student);



//Static property

class TeaTime{
    constructor(teaMaster){
        this.teaMaster = teaMaster;
    }

    menu(){
        console.log("Menu: irani chai, ginger chai, decation, bullter chai");
        
    }
    static Address(){
        console.log(`Our TeaTime's Located at Vizag, Andhra Pradesh`);
        
    }
}

class chai extends TeaTime{
    constructor(teaMaster,specialChai){
        super(teaMaster);
        this.specialChai = specialChai;
    }

    ischaiAvaialable(){
        console.log(`Yes, Our Master ${this.teaMaster}'s special Tea is available`);
        
    }
}

let consumerOne = new chai ("ChefShankar","Shankar's Special");
let consumerTwo = new TeaTime("Apparao");

consumerOne.ischaiAvaialable();
consumerTwo.menu()
TeaTime.Address();
chai.Address();
//when accessing static method from parent class, we need not create an instance.instead we can call along with class Name.