// console.log( 1 )
// console.log( 2 )
// console.log( 3 )
// console.log( 4 )
// console.log( 5 )
// console.log( 6 )
// console.log( 7 )
// console.log( 8 )
// console.log( 9 )
// console.log( 10 )


// Three Diferent Types of Control Statements that are used for Looping Operations

// Do WHile --
// While  --
// For --



// Do WHILE STATEMNET
// Do this Operation while a certain condition is being met


// problem Statemnet - Print Number From 0 - 10

// let startingNum = 0

// do {
//     startingNum = startingNum + 3
//     console.log( startingNum )

// } while ( startingNum < 10 )

// THREE IMPORTANT RULES
//- YOu need a starting a Point

//- You need to Describe by how you want to Increse or decrese the loop

//- you need to specify where the loop ends



// Problem Statemnet: Write a program that prinst Number from 20 donw to 0



// WHILE LOOP

// while a condition is being met you do something

let initNum = 0  //where you are starting from 

while ( initNum <= 10 ) {  // where you are ending
    console.log( initNum )
    initNum = initNum + 1 //how you are chaing it (incresing or decresing)
}



// FOR LOOPS
for ( let init = 10; init >= 0; init-- ) {

    console.log( init + "+" + 3 + "=" + init + 3 )

}

// let name = "ade"
// let age = 50
// let name2 = "bisi"

// //ade + bisi are both 50 years old
// console.log( name + " + " + name2 + " are both " + age + " years Old" )

// CONTINUE
for ( let index = 0; index < 10; index++ ) {
    if ( index == 5 ) {
        continue;
    }
    console.log( index )
}



// BREAK
for ( let index = 0; index < 20; index++ ) {
    console.log( index )
    if ( index == 8 ) {
        break;
    }
}


// problem Statemnt Print ALl Odd Numbers from 0 to 10

for ( let index = 0; index <= 10; index++ ) {
    if ( index % 2 == 0 ) {
        console.log( index )
    }
}

for ( let index = 0; index <= 10; index = index + 2 ) {
    console.log( index )
}







