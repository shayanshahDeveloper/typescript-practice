// Array Type in Ts

const nums: number[] = [2, 3, 5, 7, 89, 9, 10];

// Pushing the Data to Array
nums.push(...nums, 23);

// Mapping the Data
nums.map((item) => {
  return console.log(item);
});

// Array of String
const str: string[] = ["Shayan Shah", "Haris Shah", "Haroon Shah"];
console.log(str); //Log

str.push(...str, "Fazal Shah");

// Map the Array
str.map((data) => {
  console.log(data);
});

// The Old Array method
const nmbr: Array<Number> = [3, 4, 56, 7, 8, 34];
console.log(nmbr);

// String
const strArray: Array<string> = ["Shayan Shah", "Faisal Shah", "Haroon Shah"];
console.log(strArray);

strArray.map((item) => {
  console.log(item);
});

// Multi Dimensional Array
const singleDi: number[] = [1, 23, 45, 6, 56, 6];

// Double Dimensional Array
const doubleDi: number[][] = [[2, 34, 45, 67, 678]];

// Multi Dimensional Array
const multiDi: number[][][] = [[[3, 4, 45, 76, 78, 789]]];

// Log the All Arrays
console.log(singleDi);
console.log(doubleDi);
console.log(multiDi);



const magicFunc = (name:string='Demo') => {
    return `Hello ${name} Website`
}

console.log(magicFunc('Haroo Shah'));