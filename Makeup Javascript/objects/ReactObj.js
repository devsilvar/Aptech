//How do you cretet an Object


const Person = {
    name: "Esther",
    gender: "Female",
    Dept: "Responsive",
}

Person.name = "Dele"
Person[ "name" ] = "kunle"
console.log( Person.name )
console.log( Person.Dept )
console.log( Person.gender )


const student = new Object()

student.age = 33
student.gender = "female"


console.log( student.age )
console.log( student.gender )



const JamdStudent = {
    name: "Eniola",
    gender: "Male",
    Age: 18,
    score: {
        ENG: 55,
        CHEM: 44,
        MATH: 77,
        BIO: 57
    },
    DOB: function () {
        return 2024 - this.Age
    },
    isMatured: false,
}

console.log( JamdStudent.DOB() )



// HOw to Create an Object Prototype using Functionla Contructor

function genJambStudentObj ( name, age, gender, scores, isMatured ) {
    return {
        name: name,
        age: age,
        gender: gender,
        scores: scores,
        isMatured: isMatured,
        DOB: function () {
            return 2024 - this.age
        }
    }
}


// function constructor
let newSTudent = genJambStudentObj( "Jordan", 19, "Male", { ENG: 66, MATH: 77, BIO: 56, CHEM: 77 }, false )

console.log( newSTudent )
console.log( newSTudent.DOB() )

let newSTudent2 = genJambStudentObj()



// assignment

// Create a Javscript Object that contains key of name, age, gender using functional Prototype


// invoke the structure and add teh necessary parameters insde it

//chnage all the keys to a new value

// Object is a Javascript Data Type

let shoes1 = {
    productName: "Leather Shoes",
    Productprice: 3000,
    productColor: 'red',
    productDetails: 'It is a Nice Porducts Crested By the best SHoes designer',
    size: 43,
}


let shoes3 = {
    productName: "RUbber Shoes",
    Productprice: 7000,
    productColor: 'pink',
    productDetails: 'It is a Nice Porducts Crested By the best SHoes designer',
    size: 34,
}


//Functional protoType or Factory Function

function genrateProduct ( productName, productprice, productColor, productDetails, size ) {
    return {
        productName: productName,
        productColor: productColor,
        productprice: productprice,
        productDetails: productDetails,
        size: size,
    }

}

let shoess1 = genrateProduct( "Tennis", 9000, 'white', "The shoe is a Nive and Affordable Shoes used fro runing", 44 )


console.log( genrateProduct( "Nylon Shoes", 2000, 'orange', "The shoe is a Nive and Affordable Shoes used fro runing", 34 ) )


// Nested Object
// nested Object is when you have an Object inside another Object

let customerrecords = {
    name: "Dele",
    gender: 'male',
    score: {
        ENG: 44,
        MATH: 55,
        CHEM: 44,
    }
}

let customertransaction = {
    name: "dele",
    age: 12,
    transactiton: 400000
}
// let joinedObj = student + pupil;
// console.log( joinedObj )


// let joinedObj = Object.assign( {}, student, pupil )

// console.log( joinedObj )


// The secnd Way we can jin Object is by iusing Array Desturcturing


let joinObj = { ...customerrecords, ...customertransaction }

console.log( joinObj )

let keys = Object.keys( customerrecords )
console.log( keys )

let valuess = Object.values( customerrecords )
console.log( valuess )




let studentAGe = [ 2, 3, 4, 5, 5 ]



// 1. Create an object to store your personal information such as name, age, and favorite hobby.
// 2. Prompt the user to enter their name, age, and favorite hobby and store it in the object.
// 3. Create a function to display the information in a formatted way.like this => My name is { name } and my hobby is { hobby } and i am { age }

const car = {
    name: "Volvo",
    color: "red",
    hasTintedGlass: false,
    price: 50000,
    Engine: "v8",
    Model: "volvo-2004"
}


const state = {
    used: false,
}

let name = prompt( "Enter your Name" )
let age = prompt( "enter your age" )
let hobby = prompt( "enter your Hobby" )

const Ester = {
    name: name,
    age: age,
    hobby: hobby
}

function fomatted () {
    return `MY name is {Ester.name} and my Hobbby is ${Ester.hobby} and i am ${Ester.age}`
}

fomatted()





let newCar = Object.assign( {}, car, state )

// find out if this car is red

newCar;







// 4. Add a method to the object that allows the user to update any of the properties.
// 5. Prompt the user to choose which property they want to update and call the corresponding method.






for ( let i = 0; i <= keys.length; i++ ) {
    console.log( keys[ i ] )
}



// Create a JavaScript object called "car" with the following properties: 
name (string), 
color (string), 
horsepower (number),
isElectric (boolean). 

// Then, create a second object called "userInput" with prompts for the user to input the values for each property of the "car" object. 
name (string), 
color (string), 
horsepower (number),
isElectric (boolean). 


// Finally, use the whatever method to merge the user's input into the "car" object.



