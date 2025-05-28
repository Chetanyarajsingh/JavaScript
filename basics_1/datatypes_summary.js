// Primitive :-
// 7 types -> String, Number, Boolean, Null, Undefined, Symbol, BigInt

let score = 100
let scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id= Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId)
//false

const bigNumber = 484498489451515n

// Non-primitive (Reference type) :-
// Arrays, Objects, Functions

const heros = ["Hero_1","Hero_2","Hero_3"]

let myObj = {
    name: "chetanya",
    age: 20
}

const myFunction = function(){
    console.log("Hello World!")
}

console.log(typeof Function)
console.log(typeof heros)
console.log(typeof myObj)
console.log(typeof bigNumber)

// -------------------------------------------

// Memory

// Stack(Primitive), Heap(Non-primitive)

let myName = "chetanya"
let anotherName = myName
anotherName = "anyone"

console.log(anotherName)
console.log(myName)


let user = {
    email: "user@gmail.com",
    upi: "user@okaxis"
}

let user2 = user
user2.email = "user2@email.com"

console.log(user2.email)
console.log(user.email)

