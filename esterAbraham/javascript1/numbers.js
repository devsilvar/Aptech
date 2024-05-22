// Working in NUmber


let num1 = 24
let num2 = 24.22

console.log( typeof ( num1 ) )


// Maths methods

let cc = 55.2

// it rounds up notwithstanding

console.log( Math.ceil( cc ) )


console.log( Math.floor( cc ) )


console.log( Math.round( cc ) )


console.log( Math.sqrt( 56 ).toFixed( 3 ) )


let age = [ 2, 4, 5, 6, 7, 8, 9 ]

// console.log( Math.max( age ) )

// let outerARr = [...age]

console.log( ...age )

let newValue = Math.max( ...age )

console.log( newValue )
let newValue2 = Math.min( ...age )

console.log( newValue2 )


let prices = [ 10, 20, 30, 40, 50 ]


let filteredValue = prices.filter( ( item, index, arr ) => {
    return item == Math.min( ...arr )
} )

console.log( filteredValue )



let val1 = '56.5'
console.log( typeof ( val1 ) )



let newNumber = val1.toString()



let newNewNumber = parseInt( newNumber )
console.log( typeof ( newNewNumber ) )
console.log( newNewNumber )



// Javascript Dates


console.log( new Date() )

console.log( new Date().getHours() )

let hours = new Date().getHours()
let minutes = new Date().getMinutes()
let seconds = new Date().getSeconds()

console.log()













