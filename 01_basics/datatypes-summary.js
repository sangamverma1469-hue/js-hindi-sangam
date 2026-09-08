// Primitive



// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// 

// const bigNumber = 7643248474537874n



// Reference (Non primitive)



// Array, Objects, Functions

// const heros = ["Shaktiman", "Naagraj", "Doga"];
// let myObj = {
//     name: "Sangam",
//     age: 20,
// }

// const myFunction = function(){
//     console.log("Hello World!");
// }

// console.log(typeof bigNumber);   //> undefined
// console.log(typeof outsideTemp); //> object
// console.log(typeof scoreValue); //> number
// console.log(typeof myFunction); //> function
// console.log(typeof heros); //> object
// console.log(typeof anotherId); //> symbol



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Stack (Primitive), Heap (Non-Primitive) 

let myYoutubename = "sangamverma.com"

let anothername = myYoutubename
anothername = "chaiurcode"

console.log(myYoutubename);

console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "sangam@google.com"

console.log(userOne.email);
console.log(userTwo.email);

