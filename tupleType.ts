// Tuple in Typescript

// Tuple in Typescript in array is also 0 index based
const dataInfo: [string, number] = ["Shayan Shah", 23];

console.log(dataInfo[0]); //Ouput Shayan Shah
console.log(dataInfo[1]); //Ouput 23

// Destructuring in Tuple Typescript

const userArray: [string, number] = ["Haroon Shah", 26];
const [first, second] = userArray;

//Call the Destructure
console.log(first); //Haroon Shah
console.log(second); //26

const products: (number | string)[] = [2, "Apple Mackbook"];
// Log the Data
console.table(products);
