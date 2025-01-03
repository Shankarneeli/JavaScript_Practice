// Way- 1 Class based setters & Getters

//Example 1
class example{
    constructor(userName,emailId,password){
        this.userName = userName;
        this.emailId = emailId;
        this.password = password;

    }

    /*
    it is not allowed to write either get or set value.it is mandatory to write both at all times.

    And if u can observe the property values from getters & setters are different from constructor setting values in line 3,4,5.
    if both places have same valueNames,{Error comes as Maximum call stack is occupied/full}.Bcz they keepon overiding each other with 
    line 3,4,5 where constructor is setting values & in Setters also setting the same value with others.So, we'll take a new property
    names in Getters & Setters.
    */

    get userName(){
        return this._userName.toUpperCase(); 
        /* The underscore prefix signals to other developers that these properties are intended for internal use only and
        should not be accessed or modified directly from outside the object or class. 
         */
    }
    set userName(value){
        this._userName = value;
    }
    get emailId(){
        return this._emailId.toUpperCase();
    }
    set emailId(value){
        this._emailId = value;
    }
    get password(){
        return `Password is: A2${this._password}XYZ`
    }
    set password(value){
        this._password = value;
    }

}

// let userOne = new example("Bhargav","b@gmail.com",12345);
// let userTwo = new example("Shankar","sha@gmail.com",9876);
// //1st User
// console.log(`First User Name is: ${userOne.userName}`);
// console.log(`First User's emailId: ${userOne.emailId}`);
// console.log(`First User's password: ${userOne.password}`);
// //2nd User
// console.log(`Second User Name is: ${userTwo.userName}`);
// console.log(`Second User's emailId: ${userTwo.emailId}`);
// console.log(`Second User's password: ${userTwo.password}`);

//Example 2

class Rectangle{
    constructor(height,width){
        this.height=height;
        this.width = width
    }
    set height(value){
        if(value>0){
            this._height = value;
        }else{
            console.log(`Height must be Greater than 0.`);
            
        }
    }
    get height(){
        return this._height;
    }
    set width(value){
        if(value>0){
            this._width = value;
        }else{
            console.log(`width must be Greater than 0.`);
            
        }
    }
    get width(){
        return this._width;
    }
}
const rect = new Rectangle(2,8);
// console.log(`The Height of the Rectangle is: ${rect.height}`);
// console.log(`The Width of the Rectangle is: ${rect.width}`);

//Way- 2 Function based setters & Getters

function User(email,password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this,'email',{
        get: function(){
            return this._email.toUpperCase();
        },
        set: function(value){
            this._email= value;
        }
    })
    Object.defineProperty(this,'password',{
        get: function(){
            return this._password.toUpperCase();
        },
        set: function(value){
            this._password= value;
        }
    })

}

// const one = new User("one@gmail.com","Password");
// console.log(one.email);
// console.log(one.password);


//Way- 3 Object based setters & Getters

const Users = {
    _email: 'Shannu@google.com',
    _password: "xyz",
    //we r jst hardCoding the values here itself as this is an Object.

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(Users)
console.log(tea.email);
 