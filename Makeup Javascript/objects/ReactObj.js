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

