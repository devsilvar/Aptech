//simple Condition
if ( studentAge > 18 ) {
    console.log( "YOu can Vote" )
}



if ( isLateToClass == true ) {
    console.log( "Flog the Student" )
} else {
    console.log( "Allow the student Enter the class" )
}


if ( Gender == "male" ) {
    console.log( "He is a Male" )
} else if ( Gender == "Female" ) {
    console.log( "She is a Female" )
} else if ( Gender == "Binary" ) {
    console.log( "they are a Binary" )
} else if ( Gender == "Transgender" ) {
    console.log( "YOu are a trangender" )
}

if ( bestFood == "beans" ) {
    console.log( "You like protenious Food" )
} else if ( bestFood == "rice" ) {
    console.log( "YOu like carbohydrate" )
} else if ( bestFood == "Yam" ) {
    console.log( "you like string carbohydrate" )
} else if ( bestFood == "rice" ) {
    console.log( "YOu like carbohydrate" )
} else if ( bestFood == "Yam" ) {
    console.log( "you like string carbohydrate" )
} else if ( bestFood == "rice" ) {
    console.log( "YOu like carbohydrate" )
} else if ( bestFood == "Yam" ) {
    console.log( "you like string carbohydrate" )
} else if ( bestFood == "rice" ) {
    console.log( "YOu like carbohydrate" )
} else if ( bestFood == "Yam" ) {
    console.log( "you like string carbohydrate" )
} else {
    console.log( "we dont recognize yoru best foood" )
}




// SWITCH STATEMENT
// if your If else condition is getting very long, You need to change it to Switch statement

let userbestFood = "Semovita"

switch ( userbestFood ) {
    case "bean":
        console.log( "You like protein" )
        break;
    case "Rice":
        console.log( "You like Carbohydrate" )
        break;
    case "Yam":
        console.log( "You like Hard carbohydrate" )
        break;
    case "indomie":
        console.log( "You are not eating balced Diet" )
        break;
    case "Semovita":
        console.log( "YOu like eating swallow" )
        break;
    default:
        console.log( "We dont recognize your Food" )
        break;
}


// 70 - 100 => You had an  A
// 65 - 69  => You had a B
// 50 - 59 => You had a C
// 45 - 49 =>  You had a D
// 40 - 44 => You had a E
// 39 - 0 =>  You had a F

let grade = "Hello";

switch ( true ) {
    case grade >= 70:
        console.log( "You have an A" )
        break;
    case grade >= 65:
        console.log( "You have a B" )
        break;
    case grade >= 50:
        console.log( "you have a C" )
        break;
    case grade >= 45:
        console.log( "YOu have a D" )
        break;
    case grade >= 40:
        console.log( "YOu have a E" )
        break;
    case grade >= 0:
        console.log( "YOu actually Failed" )
        break;
    default:
        console.log( "Invalid Score" )
        break;
}
