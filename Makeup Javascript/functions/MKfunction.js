let myNUmber = 19  //global variable 




function MyName () {
    let myAge = 13 //local variable
    console.log( myAge )
    myNUmber = 33
    console.log( myNUmber )
}

console.log( myNUmber, "first number" )
console.log( myNUmber, "second Number" )





const myNName = () => {
    console.log( myNUmber )
}

//

// A FUNCTION IS A REFERECE DATA TYPE

// FUnction Allows us To Make a Program Modular

// Addition
// Subtraction
// Multiplication
// Division
// Squaroot


// function add(){

// }


// function subtract(){

// }


// function divide(){

// }


function greet () {
    console.log( "Hello, Good Morning" )
}

greet()
greet()

// TO make it DYnamic
function greetings ( userName ) {
    console.log( 'Hello', userName )
}

// Parameter
// Argumnets

greetings( 'Funmi' )


function add () {
    return 2 + 9
}

console.log( add() )


function addition ( a, b ) {
    return a + b
}


// console.log(object)
// dpcument.getElementBy.Id
// alert()


console.log( addition( 31, 239 ) )

console.log( orange )


var orange = 88



// write a function that adds up three numbers dynamically

function addThreeNUmbers ( a, b, c ) {
    return a + b + c
}

let result = addThreeNUmbers( 12, 5, 9 )
console.log( result )
alert( result )
document.write( result )


function checkEligibility ( userInput ) {
    if ( userInput <= 18 ) {
        console.log( "you cannot vote" )
    } else if ( userInput >= 18 ) {
        console.log( "you can vote" )
    } else {
        console.log( "Invalid Age" )
    }

}


checkEligibility( 19 )



// -- ""you cannot vote

checkEligibility( 18 )

// -- "you can vote"

