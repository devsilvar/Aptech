//CamelCase
let studentName = "ester";


// snake-case
let student_name = 'Ester';






// var name1 = "Ester"


// name1 = "Fatiaa"


// name1 = "Destiny"
// console.log( name )



// const name = "Ester"
// name = "fatia"
// console.log( name )


// String
let myName = "Ester"


//Number
let my_age = 21;
let my_wage = 22.51;


//undefined
let my_status = undefined;
let my_statuss;


//boolean
let hasCovid19 = false;
let isPresntAtAptech = true;


//objet
let jambStudent = {
    name: "Eniola",
    age: 17,
    gender: "Female"
}


let studentEster = {
    name: "Ester",
    gender: "Female",
    Dept: "Responsive",
    age: 21,
    hasVotedThisYear: false,
}

studentEster.age = 12;

console.log( studentEster )



//array

let basket = [ 12, "adebayo", true, { name: "deji" }, "female" ]


let items = [
    12, 10, 22, 28, 25, 30, 44, 33
]
// console.log( items[ 5 ] )




// function

// console.log( "Good Day, Ada", 'F' )
// console.log( 'hello , Ade', 'M' )


let greet = function ( name, gender ) {
    let femaleGreeting = "Good Day"
    let maleGreeting = "Hello"
    if ( gender == 'M' ) {
        console.log( maleGreeting, name )
    } else if ( gender == "F" ) {
        console.log( femaleGreeting, name )
    } else {
        console.log( "Error" )
    }
}


greet( "Segun", "M" )
greet( "Ester", "W" )






console.log( "Hello i am " + 12 + " years old" )


// let cc = "hello" + 12;

// console.log( cc )

// console.log( typeof ( cc ) )


// let ccc = '12' - 10

// console.log( ccc )

// let getVal = prompt( "What is your Age" )
// getVal = Number( getVal )
// console.log( typeof ( getVal ) )



let age = 12
let height = 5.9

console.log( "my name is Ester and i am " + age + " my current height is " + height + " inches" )


console.log( `MY name is Ester and i am ${age} years old, My current height is ${height} inches` )








