let name = "Shade"

let name2 = 'DELE'

//to convert a string to upper case you need to use the keyword    -- .toUpperCase()
console.log( name.toUpperCase() )


//to convert a string to lowerCase you have to use the keywords .toLowerCase()

let lowerCase = name2.toLowerCase()
console.log( lowerCase )


//to get the length of a asting or the number of items in string we use length

let studentDept = "WebAppPython"

console.log( studentDept.length )


let res = studentDept.replace( 'Python', ' Javscript' )

console.log( res )

//check the data tyope of a value


// anything covered with single quote or double quote is a string
let str1 = '{@@#@#@}'
// -- typeof
let checkDataType = typeof ( str1 )

console.log( checkDataType )

console.log( studentDept[ 1 ] )


let studentGender = "F,e,mal,e"

//convert this string into an Array

let strArr = [ 1, 2, 3, 3, 3 ]

// split

let resultingArr = studentGender.split( "," )


//console.log( resultingArr )

let s1 = "beans"

// console.log( s1.split( "" ) )
//converted it to an array
let resss = s1.split( "" );

console.log( resss )

//revered the array
let reversedWord = resss.reverse()


//convert it back to a string
let resultingStr = reversedWord.join( "" )

//printed out the result
// console.log( resultingStr )

if ( resultingStr == s1 ) {
    console.log( "it is a palindore" )
} else {
    console.log( "It is not  a palindorm" )
}

// madam
// sugar
// beans


// Find out if a person has entered a palindrome

//function behaves like a machine
function palindrome ( userInput ) {

    let resultSTR = userInput.split( "" ).reverse().join( "" )

    if ( userInput == resultSTR ) {
        console.log( "It is a palindrome" )
    } else {
        console.log( "it is not a palindrome" )
    }
}

palindrome( "mallam" )



let answer = "We Have "
let studentNum = 4
let remSntence = " Students in the class"

// clw

let str3 = "dotudn"

// console.log( str3.lastIndexOf( 'd' ) )

console.log( str3.substring( 1, 3 ) )


// How to Catcha Fish and.....

let title = "HOw i was able to travel out of the coountry in one week"

function reduceBLogTitle ( title ) {
    if ( title.length >= 20 ) {
        console.log( title.substring( 0, 20 ) + "..." )
    } else {
        console.log( title )
    }

}

reduceBLogTitle( title )


// IF ELSE

let votersAge = 18

// if(condtion is True){
//     run this block of Code
// }else{
//     run this block of code
// }


if ( votersAge >= 18 ) {
    console.log( "You are eligible to vote" )
} else {
    console.log( "You are not eligible to vote" )
}


// A, B, C, D 
let A = 80
let B = 70
let C = 50
let D = 45

let studentScore = 900

if ( studentScore == A ) {
    console.log( "you Performed excellently" )
} else if ( studentScore == B ) {
    console.log( "You perfromed Very Good" )
} else if ( studentScore == C ) {
    console.log( "You perfromed Good" )
} else if ( studentScore == D ) {
    console.log( "YOu can do better" )
} else {
    console.log( "" )
}







// Assignment

//create a varible called Score

// expected the user to enter a score

// 70 - 100 => You had an  A
// 65 - 69  => You had a B
// 55 - 59 => You had a C
// 45 - 49 =>  You had a D
// 40 - 44 => You had a E
// 39 - 0 =>  You had a F



let name = 'John Doe';
let introduction = `Hi there,
My name is ${name}.
Nice to meet you!`;
console.log(introduction);

/* Output:
Hi there,
My name is John Doe.
Nice to meet you!
*/
let str = '   Hello, world!   ';
console.log(str.trim()); // output: Hello, world!