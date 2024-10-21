const add = (a, b) => {
    console.log(a + b)
}

const subtract = (a, b) => {
    console.log(a - b)
}

const multiply = (a, b) => {
    console.log(a * b)
}

const divide = (a, b) => {
    console.log(a / b)
}

const val = 10;


const day = "Monday"

// if (day === "Monday") {
//     console.log("Its the start of the week")
// } else if (day === "Friday") {
//     console.log("Its the last work day of the week")
// } else {
//     console.log("Its another day")
// }


/*
Switch is used for
 multiple cases
*/
// switch (day) {
//     case "Monday":
//         console.log("Its the start of the week");
//         break;
//     case "Friday":
//         console.log("Its the last work day of the week");
//         break;
//     default:
//         console.log("Its another day")
// }


// Ternary operator
// console.log(val >= 0 ? "Positive" : "Negative")


// console.log(val != "10")


const str = "Hello"

const num = 5.14

const bool = false

let a = null

let b; // undefined

// for (let i = 0; i < 10; i++) {
//     console.log(`number is ${i}`)
// }

// let i = 0;
// while (i < 5) {
//     console.log("Hello")
//     // i++
// }

const names = ["Ilkin", "Orxan", "Vahid"]

// names.map((name) => {
//     console.log(name)
// })

const arr = [{name: "Ilkin", age: 25}, "Hello", true]

console.log(arr[0].age)