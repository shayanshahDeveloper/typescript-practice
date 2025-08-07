// Default Params Value

// Regular Function
//Psssing the Default Param value
function greetHello(name: string = "Anonymous") {
  return `Hello ${name}`;
}

// Calling the Function as a Default
console.log(greetHello()); //Output Hello Anonymous

// Calling the Fucntion as a Parameter
console.log(greetHello("Shayan Shah")); //Output Hello Shayan Shah
