// Returning Annotation

// Regular Func
function returnNum(num: number): number {
  // Return the number as a Double value
  return num * num;
}

// Log the Func
console.log(returnNum(2)); //Output 4

// Arrow Func
const returnDoubleNum = (num: number): number => {
  return num * num;
};

// Log the Func
console.log(returnDoubleNum(5)); //Output 25

// Return Nothing using Void
const retunVoid = (message: string): void => {
  console.log(`This is my ${message}`);
};

retunVoid("Shayan Shah");
