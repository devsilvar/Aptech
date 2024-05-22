let myGender = "male"

console.log( myGender.length )


// My first Day at Aptech
// How my First Day at AP...


let blogTitle = "How to Migrate to London from under bridge in Lagos";

let result = blogTitle.replace( "London", "America" )
console.log( result )

let ccc = "Hello"

let res = ccc.trim()
console.log( res )
console.log( res.split( "" ).reverse() )



// let titleFormat = blogTitle.substring( 0, 20 )
// console.log( titleFormat )


function FormatTitle ( title ) {

    //checking if the length of the title is greater than 20
    if ( title.length > 20 ) {
        return title.substring( 0, 20 ) + "..."
    } else {
        return title
    }
}


// CONCATENATION
// when you are adding strings to a anumber


// Javascript regards the Character + for Adding
prompt( "Enter Yoru Age Here" )

console.log( 2 + "2" )


let age = 12
let gender = "female"
let Dept = "responsive"
let name = "ester"

// my Name is Ester and i am a female, i am studying responsive at Aptech and i am 12 years old

// let resWord = 'my Name is ' + name.toUpperCase() + " i am a " + gender + ", i am studying " + Dept + " at APtech and i am " + age + " years old"

//Anotehr way to Do this

let resWord1 = `My name is ${name.toUpperCase()} i am a ${gender} , i am studying ${Dept} at APtech and i am ${age} years old`



console.log( resWord1 )
