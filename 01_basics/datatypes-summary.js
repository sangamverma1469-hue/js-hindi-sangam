// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 7643248474537874n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["Shaktiman", "Naagraj", "Doga"];
let myObj = {
    name: "Sangam",
    age: 20,
}

const myFunction = function(){
    console.log("Hello World!");
}

console.log(typeof bigNumber);   //> undefined
console.log(typeof outsideTemp); //> object
console.log(typeof scoreValue); //> number
console.log(typeof myFunction); //> function
console.log(typeof heros); //> object
console.log(typeof anotherId); //> symbol


