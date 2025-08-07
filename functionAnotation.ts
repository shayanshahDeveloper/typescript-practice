// How we Anotate through through Function in TS

// Regular Function
function addOneNumber(num: number) {
  //Adding num + 1 it will add one to your number
  return num + 1;
}

// Passing the number
const resultF = addOneNumber(5);
// Log the Data
console.log(resultF);

// Try one more
function doubleNum(nums: number) {
  // Double the Number
  return nums * 2;
}

// Logging
const outputNum = doubleNum(2);
console.log(outputNum);

// Arrow Function
const greeting = (name: String) => {
  return `Welcome ${name} to the Course !!`;
};

// Passing the data
const greet = greeting("Shayan Shah");
console.log(greet);

// Arrow Func
const doubleData = (x: number, y: number) => {
  return x * y;
};

// Logging the Data
console.log(doubleData(2, 3));

const detailsInfo = (name: string, age: number) => {
  return `My Name is ${name}, Im ${age} year old`;
};

console.log(detailsInfo("Shayan Shah", 23));
