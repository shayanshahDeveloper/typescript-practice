// Literal type in Typescript

let color: "red" | "yellow" | "orange";

color = "red"; //valid
color = "yellow"; //valid

// Number
let num = 2 | 5 | 6;
num = 2; //valid
num = 6; //valid

// Boolean

let isTrue: true;
isTrue = true; //valid


let password: 'secretpassword' = 'secretpassword';
password = 'secretpassword';

console.log(password) //Log